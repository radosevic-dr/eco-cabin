import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCabins, deleteCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { Table } from "./Table";
import styled from "styled-components";
import { AddCabin } from "./AddCabin";

const Btn = styled.button`
    padding: 1rem;
    border: none;
    border-radius: .5rem;

    &:hover{
        background-color: var(--color-brand-50);
    }
    &:first-of-type{
        margin-right: 1rem;
    }
`;

const StyledCabinTable = styled.div`
    position: relative;
`;

function CabinsTable() {
    const [editCabinId, setEditCabinId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const queryClient = useQueryClient();
    const { isLoading, data: cabins } = useQuery({
        queryKey: ["cabin"],
        queryFn: getCabins,
    });

    const { isLoading: loading, mutate } = useMutation({
        mutationFn: deleteCabin,
        onSuccess: () => {
            toast("Cabin deleted");
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
        onError: (err) => toast(err.message),
    });

    if (isLoading || loading) return <ClipLoader color="gray" />;

    const tHeaders = ["image", "Cabin", "Capacity", "Price", "Discount"];
    return (
        <StyledCabinTable>
            <>
                <Table>
                    <thead>
                        <tr>
                            {tHeaders.map((th, index) => (
                                <th key={index}>{th}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {cabins.map((cabin) => {
                            const { id, created_at, discount, imgUrl, maxCap, name, price } = cabin;

                            return (
                                <React.Fragment key={`${id}-${created_at}`}>
                                    <tr>
                                        <td>
                                            <img src={imgUrl} alt={name} />
                                        </td>
                                        <td>{name}</td>
                                        <td>{maxCap}</td>
                                        <td>{price}</td>
                                        <td>{discount}</td>
                                        <td>
                                            <Btn onClick={() => {
                                                setEditCabinId(id)
                                                setShowForm(prev => !prev)
                                                }}>
                                                {!editCabinId || editCabinId !== id ? "Edit" : "Close"}
                                            </Btn>
                                            <Btn onClick={() => mutate(id)}>Delete</Btn>
                                        </td>
                                    </tr>
                                    {editCabinId === id && showForm ? (
                                        <tr>
                                            <td colSpan="6">
                                                <div>
                                                    <AddCabin cabinToEdit={cabin} />
                                                </div>
                                            </td>
                                        </tr>
                                    ) : null}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </Table>
            </>
        </StyledCabinTable>
    );
}

export { CabinsTable };
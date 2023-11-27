import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCabins, deleteCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%; 
`;

const Table = styled.table`
    width: 100%;
    gap: 2rem;
    margin-top: 4rem;
    
    thead{
        background: var(--color-brand-50:)
    }
    tbody{
        tr{
            text-align: center;
            td:first-child{
                width: 10rem;
                img{
                    width: 100%;
                }
            }
        }
    }
`;

const Btn = styled.button`
    padding: 1rem;
    border: none;
    border-radius: .5rem;

    &:hover{
        background-color: var(--color-brand-50);
    }
`;

const StyledCabinTable = styled.div`
    position: relative;
`;

function CabinsTable() {
    const queryClient = useQueryClient();
    const { isLoading, data: cabins, error } = useQuery({
        queryKey: ["cabin"],
        queryFn: getCabins,
    });

    const { isLoading: loading, mutate } = useMutation({
        mutationFn: deleteCabin,
        onSuccess: () => {
            toast("Cabin deleted");
            queryClient.invalidateQueries({ queryKey: ["cabins"] });

        },
        onError: err => toast(err.message)
    });

    if (isLoading || loading) return <Loader>
        <ClipLoader color="gray" />
    </Loader>;

    {/* const { id, created_at, description, discount, imgUrl, maxCap, name, price } = cabin; */ }
    return (
        <StyledCabinTable>
            <Table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Cabin</th>
                        <th>Capacity</th>
                        <th>Price</th>
                        <th>Discount</th>
                    </tr>
                </thead>
                <tbody>
                    {cabins.map(cabin => {
                        const { id, created_at, description, discount, imgUrl, maxCap, name, price } = cabin;

                        return (
                            <tr key={id}>
                                <td><img src={imgUrl} alt={name} /></td>
                                <td>{name}</td>
                                <td>{maxCap}</td>
                                <td>{price}</td>
                                <td>{discount}</td>
                                <td>
                                    <Btn onClick={() => mutate(id)}>Delete</Btn>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </StyledCabinTable>
    );
}

export { CabinsTable };

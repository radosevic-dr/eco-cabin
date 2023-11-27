import { useState } from "react";
import { getCabins } from "../services/apiCabins";
import { CabinsTable } from "../features";
import { Row, Heading } from "../ui";
import { AddCabin } from "../features";
import styled from "styled-components";

const Btn = styled.button`
    width: 100%;
    padding: 1rem;
    border:none;
    border-radius: .5rem;
    background-color: var(--color-indigo-100);
`;

function Cabins() {
    const [showAddCabin, setAddCabin] = useState(false);
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Available Cabins</Heading>

            </Row>

            <Row>
                <CabinsTable />
                <Btn onClick={() => setAddCabin(prev => !prev)}>Add Cabin</Btn>
                {showAddCabin ? <AddCabin /> : null}
            </Row>
        </>

    );
}

export { Cabins };

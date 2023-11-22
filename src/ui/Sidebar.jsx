import styled from "styled-components";
import { Logo } from "./nav/Logo";
import { Navigation } from "./nav/Navigation";

const StyledSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 3rem 2rem;
    background-color: var(--color-grey-0);
    border-right: 1px solid (--color-grey-100);
    grid-row: 1 / -1;
`;

function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <Navigation />
        </StyledSidebar>
    );
}

export { Sidebar };

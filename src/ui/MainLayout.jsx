import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

const StyledLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    
`;

const Main = styled.main`
    padding: 4rem 5rem 6rem;
    background-color: var(--color-grey-50);
`;

function MainLayout() {
    return (
        <StyledLayout>
            <Header />
            <Sidebar />
            <Main>
                <Outlet />
            </Main>
        </StyledLayout>
    );
}

export { MainLayout };

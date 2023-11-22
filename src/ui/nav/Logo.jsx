import styled from "styled-components";

const StyledLogo = styled.div`
    text-align: center;
`;
const LogoImg = styled.img`
    height: 10rem;
    width: auto;
`;

function Logo() {
    return (
        <StyledLogo>
            <LogoImg src="/logo.svg" alt="Logo" />
        </StyledLogo>
    );
}

export { Logo };

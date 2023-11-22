import styled, { css } from 'styled-components';

const btnSizes = {
    sm: css`
        font-size: 1.3rem;
        padding: 0.5rem 1rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    `,
    md: css`

    `,
    lg: css`

    `
};

const btnVariants = {
    primary: css``,
    secondary: css``,
    danger: css``
};

const Button = styled.button`
    border: none;
    border-radius:var(--border-radius-sm);  
    box-shadow: var(--shadow-sm);

    ${props => btnSizes[props.size]}
    ${props => btnVariants[props.variant]}
`;

Button.defaultProps = {
    size: 'md',
    variant: "primary"
};

export default Button;
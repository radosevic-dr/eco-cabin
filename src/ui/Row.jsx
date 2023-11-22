import styled, { css } from 'styled-components';

const Row = styled.div`
    display: flex;
    ${props => {
        const { type } = props;
        switch (type) {
            case "horizontal":
                return css`
                    justify-content: space-between;
                    align-items: center;
                `;
            case `vertical`:
                return css`
                    flex-direction: column;
                    gap: 2rem;
                `;
        }
    }}
`;

Row.defaultProps = {
    type: "vertical"
};

export default Row;

import styled from "styled-components";

export const Table = styled.table`
position: relative;
    width: 100%;
    gap: 2rem;
    margin-top: 4rem;
    
    thead{
        background: var(--color-brand-50)
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
            .formTd {
                display: block;
                width: 100%;
                clear: both;
            }
            .hideFormTd{
                display: none;
            }
        }
    }
`;
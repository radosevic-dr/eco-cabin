import styled, { css } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 30rem;
  margin-right: auto;
  div {
    margin-top: 5rem;
    display: inherit;
    flex-direction: inherit;
    gap: 2rem;

    label {
      font-size: 1.8rem;
    }

    input {
      padding: 0.8rem;
      border: none;
      border-radius: 0.5rem;
      background-color: lightgray;
    }
  }
`;

export { Form };

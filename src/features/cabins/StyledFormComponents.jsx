import { useFormContext } from "react-hook-form";
import { validateInputs } from "./cabinValidation";
import styled from "styled-components";

/**
 * Input component
 */

const InputRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  height: 4rem;
  align-items: center;

  input {
    padding: 0.5rem auto;
  }
`;

function Input(props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // eslint-disable-next-line react/prop-types
  const { title, name, type, validateValue, isEditActive, ...rest } = props;
  const validationRules = validateInputs(
    name,
    validateValue || null,
    isEditActive || null
  );
  return (
    <InputRow>
      <label htmlFor={name}>{title}</label>
      <input type={type} {...register(name, validationRules)} {...rest} />
      {errors[name]?.message && <p>{errors[name].message}</p>}
    </InputRow>
  );
}

/**
 * Form component
 */

const Form = styled.form`
  width: 40rem;
  background-color: var(--color-gray-50);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export { Form, Input };

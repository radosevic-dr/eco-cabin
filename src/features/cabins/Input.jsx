import { useFormContext } from 'react-hook-form';
import { validateInputs } from "./cabinValidation";
import styled from "styled-components";

const InputRow = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    height: 4rem;
    align-items: center;

    input{
        padding: .5rem auto;
    }
`;

function Input(props) {
    const { register, formState: { errors } } = useFormContext();
    // eslint-disable-next-line react/prop-types
    const { title, name, type, validateValue, ...rest } = props;
    const validationRules = validateInputs(name, validateValue || false);
    return (
        <InputRow>
            <label htmlFor={name}>{title}</label>
            <input type={type} {...register(name, validationRules)} {...rest} />
            {errors[name]?.message && <p>{errors[name].message}</p>}
        </InputRow>
    );
}

export default Input;
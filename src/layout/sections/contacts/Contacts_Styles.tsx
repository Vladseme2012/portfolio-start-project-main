import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Contacts = styled.section``;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 540px;
    gap: 15px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`;

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderField};
    padding: 7px 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.5em;
    color: ${theme.colors.colorText};

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.borderField};
    }
`;

export const S = {
    Contacts,
    Form,
    Field,
};

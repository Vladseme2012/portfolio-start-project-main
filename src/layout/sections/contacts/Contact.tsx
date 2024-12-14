import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm action="">
                    <StyledField placeholder={'name'} />
                    <StyledField placeholder={'subject'} />
                    <StyledField as={'textarea'} placeholder={'massage'} />
                    <Button type={'submit'}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section``;

const StyledForm = styled.form`
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

const StyledField = styled.input`
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

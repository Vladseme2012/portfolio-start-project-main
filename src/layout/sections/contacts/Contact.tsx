import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm action="">
                <StyledField placeholder={'name'} />
                <StyledField placeholder={'subject'} />
                <StyledField as={'textarea'} placeholder={'massage'} />
                <Button type={'submit'}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 540px;
    gap: 5px;
`;

const StyledField = styled.input``;

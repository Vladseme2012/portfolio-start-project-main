import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';

export const Contact: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form action="">
                    <S.Field placeholder={'name'} />
                    <S.Field placeholder={'subject'} />
                    <S.Field as={'textarea'} placeholder={'massage'} />
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

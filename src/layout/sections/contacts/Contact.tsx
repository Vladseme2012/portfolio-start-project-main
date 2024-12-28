import React, { ElementRef, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (!form.current) {
            return;
        }

        emailjs
            .sendForm('service_xcimrg8', 'template_sggpor3', form.current, {
                publicKey: '9m6lYRsFCWmWemzI9',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };
    return (
        <S.Contacts id={'contact'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field placeholder={'name'} name={'user_name'} />
                    <S.Field placeholder={'subject'} name={'subject'} />
                    <S.Field
                        as={'textarea'}
                        placeholder={'message'}
                        name={'message'}
                    />
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

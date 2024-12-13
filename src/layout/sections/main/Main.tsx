import React from 'react';
import styled from 'styled-components';
import photo from './../../../assets/images/photo.jpg';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <WelcomeText>Hi There</WelcomeText>
                        <Name>
                            I am <span>Svetlana Dyablo</span>
                        </Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt="photo" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #1f1f20;
`;
const WelcomeText = styled.span`
    font-weight: 400;
    font-size: 14px;
`;

const MainTitle = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-style: 50px;
    letter-spacing: 0.5em;
`;

const Name = styled.h2`
    font-weight: 400;
    font-style: 27px;
    margin: 10px 0;
    span {
        position: relative;
        z-index: 1;

        &::before {
            position: absolute;
            bottom: 0;
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            color: ${theme.colors.accent};
            z-index: -1;
        }
    }
`;

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    &::before {
        position: absolute;
        top: -24px;
        left: 24px;
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        z-index: -1;
    }
`;

const Photo = styled.img`
    width: 350px;
    height: 450px;
    object-fit: cover;
`;

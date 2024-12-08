import React from 'react';
import styled from 'styled-components';
import photo from './../../../assets/images/photo.jpg';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <WelcomeText>Hi There</WelcomeText>
                    <Name>I am Svetlana Dyablo</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <Photo src={photo} alt="photo" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #1f1f20;
`;

const MainTitle = styled.h1``;

const Name = styled.h2``;

const WelcomeText = styled.span``;

const Photo = styled.img`
    width: 350px;
    height: 450px;
    object-fit: cover;
`;

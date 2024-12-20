import React from 'react';
import styled from 'styled-components';
import photo from './../../../assets/images/photo.jpg';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper
                    align={'center'}
                    justify={'space-between'}
                    wrap={'wrap'}
                >
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
    ${font({
        weight: 400,
        fontMax: 27,
        fontMin: 20,
    })}
`;

const Name = styled.h2`
    ${font({
        family: "'Josefin Sans', sans-serif",
        weight: 700,
        fontMax: 50,
        fontMin: 36,
    })}
    letter-spacing: 0.5em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 1;
        white-space: nowrap;

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

    @media ${theme.media.mobile} {
        margin: 15px 0 20px;
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

        @media ${theme.media.mobile} {
            width: 320px;
            height: 400px;
            top: -17px;
            left: 20px;
        }
    }

    @media (${theme.media.mobile}) {
        margin-top: 65px;
    }
`;

const Photo = styled.img`
    width: 350px;
    height: 450px;
    object-fit: cover;
    margin-right: 15px;

    @media (${theme.media.mobile}) {
        width: 310px;
        height: 380px;
    }
`;

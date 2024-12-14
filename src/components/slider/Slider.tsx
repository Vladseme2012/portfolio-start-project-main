import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { theme } from '../../styles/Theme';

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                    </Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    border: 1px solid red;
`;

const Slide = styled.div`
    text-align: center;
`;

const Text = styled.p``;

const Name = styled.span`
    display: inline-block;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 20px 0 40px;
`;

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;

        & + span {
            margin: 5px;
        }

        &.active {
            background-color: ${theme.colors.accent};
        }
    }
`;

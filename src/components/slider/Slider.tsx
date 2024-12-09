import React from 'react';
import styled from 'styled-components';

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                </Text>
                <Name>@ivan ivanow</Name>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    border: 1px solid red;
`;

const Slide = styled.div`
    text-align: center;
`;

const Text = styled.p``;

const Name = styled.span``;

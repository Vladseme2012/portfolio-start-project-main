import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const Slider = styled.div`
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
    margin: 22px 0 32px;
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

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
};

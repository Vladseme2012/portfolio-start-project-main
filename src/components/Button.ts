import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const Button = styled.button`
    position: relative;
    width: 170px;
    height: 32px;
    font-weight: 400;
    font-style: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    z-index: 0;

    &:hover {
        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        width: 50%;
        height: 10px;
        background-color: ${theme.colors.accent};
        transition: ${theme.animations.transition};
        z-index: -1;
    }
`;

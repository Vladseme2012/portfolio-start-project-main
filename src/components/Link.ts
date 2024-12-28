import styled, { css } from 'styled-components';
import { theme } from '../styles/Theme';

export const Link = styled.a<{ active?: boolean }>`
    position: relative;
    padding: 10px;
    font-weight: 400;
    font-style: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    z-index: 0;

    &:hover {
        &::before {
            height: 10px;
        }
    }

    &::before {
        display: inline-block;
        color: ${theme.colors.accent};
        position: absolute;
        left: 0;
        right: 0;
        bottom: 5px;
        content: '';
        height: 0;
        z-index: -1;
        transition: ${theme.animations.transition}
            ${(props) =>
                props.active &&
                css<{ active?: boolean }>`
                    & {
                        height: 10px;
                    }
                `};
    }
`;

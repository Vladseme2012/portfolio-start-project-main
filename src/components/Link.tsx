import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const Link = styled.a`
    padding: 10px;
    font-weight: 400;
    font-style: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
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
        bottom: -5px;
        content: '';
        z-index: -1;
    }
`;

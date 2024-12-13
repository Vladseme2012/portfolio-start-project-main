import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const SectionTitle = styled.h2`
    position: relative;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-style: 36px;
    letter-spacing: 5px;
    text-align: center;
    margin-bottom: 90px;

    &::before {
        display: inline-block;
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
        content: '';
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
    }
`;

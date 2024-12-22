import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { font } from '../styles/Common';

export const SectionTitle = styled.h2`
    ${font({
        family: "'Josefin Sans', sans-serif",
        weight: 600,
        fontMax: 36,
        fontMin: 30,
    })};

    position: relative;
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

        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`;

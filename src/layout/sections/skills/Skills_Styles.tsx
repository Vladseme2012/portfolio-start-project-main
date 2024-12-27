import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

// skills
const Skills = styled.section`
    position: relative;
`;

// skill
const SkillArticle = styled.article`
    max-width: 330px;
    padding: 42px 20px 50px;
    flex-grow: 1;

    @media (${theme.media.mobile}) {
        padding: 62px 0 40px;
    }
`;

export const IconWrapper = styled.div`
    position: relative;
    &::before {
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: #ffffff19;
        transform: rotate(45deg) translate(-50%, -50%);
        content: '';
    }
`;

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-style: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

const SkillDescription = styled.p`
    text-align: center;
`;

export const S = {
    Skills,
    SkillArticle,
    IconWrapper,
    SkillTitle,
    SkillDescription,
};

import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Link } from '../../../components/Link';
import { Button } from '../../../components/Button';

// works
const SectionWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`;

// work
const Work = styled.article`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`;

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        content: '';
        background: #0000004c;
        backdrop-filter: blur(8px);
        opacity: 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }
        ${Button} {
            opacity: 1;
        }
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }
        ${Button} {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`;

const Description = styled.div`
    padding: 25px 20px;
`;

const Title = styled.h2``;

const Text = styled.p`
    margin: 15px 0 10px;
`;

//tabMenu
const TabMenu = styled.nav`
    ul {
        max-width: 352px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0 auto 40px;
    }
`;

const ListItem = styled.li``;

export const S = {
    SectionWorks,
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text,
    TabMenu,
    ListItem,
};

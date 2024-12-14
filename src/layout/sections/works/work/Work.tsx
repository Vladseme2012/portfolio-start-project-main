import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';
import { Button } from '../../../../components/Button';

type ImagePropsType = {
    src: string;
    alt?: string;
    title: string;
    text: string;
    href?: string;
};

export const Work = (props: ImagePropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt={''} />
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={props.href}>demo</Link>
                <Link href={props.href}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.article`
    background-color: ${theme.colors.secondaryBg};
    width: 100%;
    max-width: 540px;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
`;

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        &::before {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            content: '';
            background: #0000004c;
            backdrop-filter: blur(8px);
        }
        ${Button} {
            opacity: 1;
        }
    }

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

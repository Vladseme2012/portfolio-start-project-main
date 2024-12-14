import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';

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
            <Image src={props.src} alt={''} />
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

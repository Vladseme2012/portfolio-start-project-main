import React from 'react';
import styled from 'styled-components';

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
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={props.href}>demo</Link>
            <Link href={props.href}>Code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #1f1f20;
    width: 100%;
    max-width: 540px;
`;

const Image = styled.div`
width: 100%
height: 260px;
object-fit: cover;
`;

const Title = styled.h2``;

const Text = styled.p``;

const Link = styled.a``;

import React from 'react';
import { Link } from '../../../../components/Link';
import { Button } from '../../../../components/Button';
import { S } from '../Work_Styles';

type ImagePropsType = {
    src: string;
    alt?: string;
    title: string;
    text: string;
    href?: string;
};

export const Work: React.FC<ImagePropsType> = (props: ImagePropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={''} />
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link href={props.href}>demo</Link>
                <Link href={props.href}>code</Link>
            </S.Description>
        </S.Work>
    );
};

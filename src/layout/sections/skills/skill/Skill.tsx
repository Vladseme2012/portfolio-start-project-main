import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

type SkillPropsType = {
    iconId: string;
    title: string;
    text: string;
};

export const Skill = (props: SkillPropsType) => {
    return (
        <SkillArticle>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={props.iconId} />
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillDescription>{props.text}</SkillDescription>
            </FlexWrapper>
        </SkillArticle>
    );
};

const SkillArticle = styled.article`
    max-width: 330px;
    padding: 62px 20px 40px;
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

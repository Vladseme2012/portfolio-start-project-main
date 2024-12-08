import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
    iconId: string;
    title: string;
    text: string;
};

export const Skill = (props: SkillPropsType) => {
    return (
        <SkillArticle>
            <Icon iconId={props.iconId} />
            <SkillTitle>{props.title}</SkillTitle>
            <SkillDescription>{props.text}</SkillDescription>
        </SkillArticle>
    );
};

const SkillArticle = styled.div`
    background-color: #1f1f20;
    min-height: 100vh;
`;
const SkillTitle = styled.h3``;
const SkillDescription = styled.p``;

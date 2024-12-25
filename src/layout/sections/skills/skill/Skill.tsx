import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Skills_styles';

type SkillPropsType = {
    iconId: string;
    title: string;
    text: string;
};

export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <S.SkillArticle>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId} />
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillDescription>{props.text}</S.SkillDescription>
            </FlexWrapper>
        </S.SkillArticle>
    );
};

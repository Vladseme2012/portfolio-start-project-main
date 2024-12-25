import React from 'react';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { S } from './Skills_Styles';

type SkillsDataType = {
    iconId: string;
    title: string;
    text: string;
};
const mokeText: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim';

const skillsData: Array<SkillsDataType> = [
    {
        iconId: 'tag',
        title: 'css3',
        text: mokeText,
    },
    {
        iconId: 'css3',
        title: 'css3',
        text: mokeText,
    },
    {
        iconId: 'react',
        title: 'react',
        text: mokeText,
    },
    {
        iconId: 'typescript',
        title: 'typescript',
        text: mokeText,
    },
    {
        iconId: 'styled-components',
        title: 'styled-components',
        text: mokeText,
    },
    {
        iconId: 'figma',
        title: 'figma',
        text: mokeText,
    },
];

export const Skills: React.FC = () => {
    return (
        <S.SectionSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillsData.map((skill, index) => (
                        <Skill
                            key={index}
                            iconId={skill.iconId}
                            title={skill.title}
                            text={skill.text}
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </S.SectionSkills>
    );
};

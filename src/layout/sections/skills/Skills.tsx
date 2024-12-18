import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSectionSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill
                        iconId={'tag'}
                        title={'html5'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                        }
                    />
                    <Skill
                        iconId={'css3'}
                        title={'css3'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                        }
                    />
                    <Skill
                        iconId={'react'}
                        title={'react'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                        }
                    />
                    <Skill
                        iconId={'typescript'}
                        title={'typescript'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                        }
                    />
                    <Skill
                        iconId={'styled-components'}
                        title={'styled-components'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                        }
                    />
                    <Skill
                        iconId={'figma'}
                        title={'figma'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
                        }
                    />
                </FlexWrapper>
            </Container>
        </StyledSectionSkills>
    );
};

const StyledSectionSkills = styled.section``;

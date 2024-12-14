import React from 'react';
import styled from 'styled-components';
import socialNetwork from './../../../assets/images/social-network.png';
import counter from './../../../assets/images/counter.png';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';

const itemsWorks = ['All', 'landing page', 'React', 'spa'];

export const Works = () => {
    return (
        <StyledSectionWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={itemsWorks} />
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Work
                        src={socialNetwork}
                        title={'Social Network'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        }
                    />
                    <Work
                        src={counter}
                        title={'Timer'}
                        text={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim'
                        }
                    />
                </FlexWrapper>
            </Container>
        </StyledSectionWorks>
    );
};

const StyledSectionWorks = styled.section``;

import React from 'react';
import styled from 'styled-components';
import socialNetwork from './../../../assets/images/social-network.png';
import counter from './../../../assets/images/counter.png';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';

const itemsWorks = ['All', 'landing page', 'React', 'spa'];

export const Works = () => {
    return (
        <StyledSectionWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu items={itemsWorks} />
            <FlexWrapper justify={'space-around'}>
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
        </StyledSectionWorks>
    );
};

const StyledSectionWorks = styled.section`
    min-height: 100vh;
    background-color: #1f1f20;
`;

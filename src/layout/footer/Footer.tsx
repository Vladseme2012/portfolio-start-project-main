import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../components/SectionTitle';
import { Menu } from '../../components/menu/Menu';

export const Footer = () => {
    return (
        <StyledFooter>
            <SectionTitle>Svetlana</SectionTitle>
            <Menu items={} />
            
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

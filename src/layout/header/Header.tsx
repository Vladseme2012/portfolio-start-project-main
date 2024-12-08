import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

const itemsMenu = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu items={itemsMenu} />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #1f1f20;
    display: flex;
    justify-content: space-between;
`;

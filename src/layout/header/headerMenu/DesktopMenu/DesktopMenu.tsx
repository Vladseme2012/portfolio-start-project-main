import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../menu/HeaderMenu_Styles';

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu />
        </S.DesktopMenu>
    );
};

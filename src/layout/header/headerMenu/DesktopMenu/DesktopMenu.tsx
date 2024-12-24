import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../menu/HeaderMenu_Styles';


export const DesktopMenu: React.FC<{ items: Array<string> }> = (props) => {
    return (
        <S.DesktopMenu>
            <Menu items={props.items} />
        </S.DesktopMenu>
    );
};

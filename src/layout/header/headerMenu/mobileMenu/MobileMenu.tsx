import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

export const MobileMenu: React.FC<{
    items: Array<string>;
}> = (props) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={true}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={true}>
                <Menu items={props.items} />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

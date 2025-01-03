import React, { useState } from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../menu/HeaderMenu_Styles';

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const burgerClickHandler = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={burgerClickHandler} isOpen={menuIsOpen}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={burgerClickHandler}>
                <Menu setMenuIsOpen={setMenuIsOpen} />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

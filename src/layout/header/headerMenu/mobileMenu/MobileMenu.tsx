import React, { useState } from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../menu/HeaderMenu_Styles';

export const MobileMenu: React.FC<{
    items: Array<string>;
}> = (props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const burgerClickHandler = () => {
        setMenuIsOpen(!setMenuIsOpen);
    };

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={burgerClickHandler} isOpen={menuIsOpen}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup
                isOpen={menuIsOpen}
                onClick={() => {
                    setMenuIsOpen(false);
                }}
            >
                <Menu items={props.items} />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

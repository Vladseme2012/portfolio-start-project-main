import React from 'react';
import { S } from './HeaderMenu_Styles';

const itemsLink = [
    { title: 'Home', href: 'home' },
    { title: 'Skills', href: 'skills' },
    { title: 'Works', href: 'works' },
    { title: 'Testimony', href: 'testimony' },
    { title: 'Contact', href: 'contact' },
];

export const Menu: React.FC = () => {
    return (
        <S.List>
            {itemsLink.map((item, index) => (
                <S.ListItem key={index}>
                    <S.NavLink
                        to={item.href}
                        smooth={true}
                        activeClass={'active'}
                        spy={true}
                        offset={50}
                    >
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.ListItem>
            ))}
        </S.List>
    );
};

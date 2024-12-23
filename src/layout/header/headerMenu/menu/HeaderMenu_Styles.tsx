import styled, { css } from 'styled-components';
import { theme } from '../../../../styles/Theme';


// Menu
const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: transparent;
`;

const Mask = styled.span`
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.accent};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;

const List = styled.ul``;

const ListItem = styled.li`
    position: relative;
    &::before {
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};
        z-index: 1;
        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }
        ${Mask} {
            transform: skewX(10deg) translateX(5px);
            color: ${theme.colors.colorText};

            & + ${Mask} {
                transform: skewX(10deg) translateX(-5px);
            }
        }
    }
`;

//styles for MobileMenu
const MobileMenu = styled.nav``;

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.colorText};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
                background-color: rgba(255, 255, 255, 0);
            `}

        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.colorText};
            position: absolute;
            transform: translateY(-10px);

            ${(props) =>
                props.isOpen &&
                css<{ isOpen: boolean }>`
                    transform: rotate(-45deg) translateY(0);
                `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.colorText};
            position: absolute;
            transform: translateY(10px);

            ${(props) =>
                props.isOpen &&
                css<{ isOpen: boolean }>`
                    width: 36px;
                    transform: rotate(45deg) translateY(0);
                `}
        }
    }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(31, 31, 32, 0.9);
    z-index: 999;
    display: none;

    ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
            display: flex;
            justify-content: center;
            align-items: center;
        `}

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
`;

// DeskTopMenu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`;

export const S = {
    Link,
    Mask,
    List,
    ListItem,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu,
};

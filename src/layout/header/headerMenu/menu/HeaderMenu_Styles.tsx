import styled, { css } from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Link } from 'react-scroll';

// Menu
const List = styled.ul``;

const ListItem = styled.li`
    position: relative;
`;

const Mask = styled.span`
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.accent};
    transition: ${theme.animations.transition};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;

const NavLink = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: transparent;

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
        transition: ${theme.animations.transition};
    }

    &:hover,
    &.active {
        &::before {
            transform: scale(1);
        }
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
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
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 0.9s ease-in-out;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        transition: 0.9s ease-in-out;
    }

    ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
            transform: translateY(0);

            & ul {
                gap: 40px;
            }
        `}
`;

// DeskTopMenu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`;

export const S = {
    NavLink,
    Mask,
    List,
    ListItem,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu,
};

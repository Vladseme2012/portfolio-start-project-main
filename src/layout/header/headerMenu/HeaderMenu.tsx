import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const HeaderMenu = (props: { items: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.items.map((item, index) => (
                    <ListItem key={item[index]}>
                        <Link href="#">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                ))}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`;

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

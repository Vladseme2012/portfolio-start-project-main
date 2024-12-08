import React from 'react';
import styled from 'styled-components';

export const Menu = (props: { items: Array<string> }) => {
    return (
        <StyledNav>
            <ul>
                {props.items.map((item, index) => (
                    <li key={item[index]}>
                        <a href="">item</a>
                    </li>
                ))}
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`;

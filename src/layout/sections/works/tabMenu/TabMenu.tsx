import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export const TabMenu = (props: { items: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.items.map((item, index) => (
                    <ListItem key={item[index]}>
                        <Link href="">item</Link>
                    </ListItem>
                ))}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    margin-bottom: 40px;
    ul {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
`;

const ListItem = styled.li``;

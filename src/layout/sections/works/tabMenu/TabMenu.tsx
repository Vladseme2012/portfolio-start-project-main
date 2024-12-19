import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export const TabMenu = (props: { items: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.items.map((item, index) => (
                    <ListItem key={item[index]}>
                        <Link href="">{item}</Link>
                    </ListItem>
                ))}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        max-width: 352px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0 auto 40px;
    }
`;

const ListItem = styled.li``;

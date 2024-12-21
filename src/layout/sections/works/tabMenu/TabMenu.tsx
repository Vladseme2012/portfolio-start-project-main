import React from 'react';
import { Link } from '../../../../components/Link';
import { S } from '../Work_Styles';

export const TabMenu:React.FC<{items: Array<string>}> = (props) => {
    return (
        <S.TabMenu>
            <ul>
                {props.items.map((item, index) => (
                    <S.ListItem key={index}>
                        <Link href="">{item}</Link>
                    </S.ListItem>
                ))}
            </ul>
        </S.TabMenu>
    );
};

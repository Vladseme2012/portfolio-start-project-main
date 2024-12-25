import React from 'react';
import { Link } from '../../../../components/Link';
import { S } from '../Work_Styles';

export const TabMenu: React.FC<{
    tabsItems: Array<{
        title: string;
        status: 'all' | 'landing' | 'react' | 'spa';
    }>;
}> = (props) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabsItems.map((tab, index) => (
                    <S.ListItem key={index}>
                        <Link href="">{tab.title}</Link>
                    </S.ListItem>
                ))}
            </ul>
        </S.TabMenu>
    );
};

import React from 'react';
import { Link } from '../../../../components/Link';
import { S } from '../Work_Styles';

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa';

type TabMenuPropsType = {
    tabsItems: Array<{
        title: string;
        status: TabsStatusType;
    }>;
    changeFilterStatus: (valueFilter: TabsStatusType) => void;
    currentFilterStatus: string;
};

export const TabMenu: React.FC<TabMenuPropsType> = (props) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabsItems.map((tab, index) => (
                    <S.ListItem key={index}>
                        <Link
                            active={props.currentFilterStatus === tab.status}
                            as={'button'}
                            onClick={() => {
                                props.changeFilterStatus(tab.status);
                            }}
                        >
                            {tab.title}
                        </Link>
                    </S.ListItem>
                ))}
            </ul>
        </S.TabMenu>
    );
};

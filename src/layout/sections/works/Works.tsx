import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import socialNetwork from './../../../assets/images/social-network.png';
import counter from './../../../assets/images/counter.png';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu, TabsStatusType } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import { S } from './Work_Styles';

type WorksDataType = {
    src: string;
    title: string;
    text: string;
    type: string;
    id: number;
};

export type TabItemTypes = {
    title: string;
    status: TabsStatusType;
};

const tabsItems: Array<TabItemTypes> = [
    {
        title: 'All',
        status: 'all',
    },
    {
        title: 'landing page',
        status: 'landing',
    },
    {
        title: 'React',
        status: 'react',
    },
    {
        title: 'SPA',
        status: 'spa',
    },
];

const worksData: Array<WorksDataType> = [
    {
        src: socialNetwork,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa',
        id: 1,
    },
    {
        src: counter,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim',
        type: 'react',
        id: 2,
    },
];

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
    let filteredWorks = worksData;

    if (currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter((work) => work.type === 'landing');
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = worksData.filter((work) => work.type === 'react');
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter((work) => work.type === 'spa');
    }

    function changeFilterStatus(valueFilter: TabsStatusType) {
        setCurrentFilterStatus(valueFilter);
    }

    return (
        <S.SectionWorks id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu
                    tabsItems={tabsItems}
                    changeFilterStatus={changeFilterStatus}
                    currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <AnimatePresence>
                        {filteredWorks.map((work) => (
                            <motion.div
                                style={{
                                    width: '400px',
                                    flexGrow: 1,
                                    maxWidth: '540px',
                                }}
                                layout
                                key={work.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Work
                                    key={work.id}
                                    src={work.src}
                                    title={work.title}
                                    text={work.text}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.SectionWorks>
    );
};

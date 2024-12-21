import React from 'react';
import socialNetwork from './../../../assets/images/social-network.png';
import counter from './../../../assets/images/counter.png';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import { S } from './Work_Styles';

type WorksDataType = {
    src: string;
    title: string;
    text: string;
};

const itemsWorks: Array<string> = ['All', 'landing page', 'React', 'spa'];

const worksData: Array<WorksDataType> = [
    {
        src: socialNetwork,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
        src: counter,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim',
    },
];

export const Works: React.FC = () => {
    return (
        <S.SectionWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={itemsWorks} />
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    {worksData.map((work, index) => (
                        <Work
                            key={index}
                            src={work.src}
                            title={work.title}
                            text={work.text}
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </S.SectionWorks>
    );
};

import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { St } from './Testimony_Styles';
import { S } from '../skills/Skills_Styles';

export const Testimony: React.FC = () => {
    return (
        <St.Testimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={'quote'} />
                    </S.IconWrapper>
                    <Slider />
                </FlexWrapper>
            </Container>
        </St.Testimony>
    );
};

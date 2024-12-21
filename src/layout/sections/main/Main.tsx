import React from 'react';
import photo from './../../../assets/images/photo.jpg';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper
                    align={'center'}
                    justify={'space-between'}
                    wrap={'wrap'}
                >
                    <div>
                        <S.WelcomeText>Hi There</S.WelcomeText>
                        <S.Name>
                            I am <span>Svetlana Dyablo</span>
                        </S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="photo" />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

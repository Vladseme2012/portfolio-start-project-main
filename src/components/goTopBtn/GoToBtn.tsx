import React, { useEffect, useState } from 'react';
import { S } from './GoTopBtn_Styles';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

export const GoToBtn: React.FC = () => {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.screenY > 200) {
                setShowBtn(!showBtn);
            } else {
                setShowBtn(!showBtn);
            }
        });
    }, []);

    const goTop = (
        <S.GoTopBtn
            onClick={() => {
                scroll.scrollToTop();
            }}
        >
            <Icon
                iconId={'arrowGoTop'}
                width={'16px'}
                height={'15px'}
                viewBox={'0 0 16 15'}
            />
        </S.GoTopBtn>
    );

    return <>{showBtn && goTop}</>;
};

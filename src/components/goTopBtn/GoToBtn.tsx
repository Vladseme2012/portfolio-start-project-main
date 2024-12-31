import React, { useEffect, useState } from 'react';
import { S } from './GoTopBtn_Styles';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

export const GoToBtn: React.FC = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        let scrollToClick = () => {
            if (window.scrollY > 200) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener('scroll', scrollToClick);
        
        return () => {
          window.removeEventListener('scroll', scrollToClick)
        };
    }, []);

    return (
        <>
            {showBtn && (
                <S.GoTopBtn
                    onClick={() => {
                        scroll.scrollToTop();
                    }}
                >
                    <Icon
                        iconId={'arrowGoTop'}
                        width={'16'}
                        height={'15'}
                        viewBox={'0 0 16 15'}
                    />
                </S.GoTopBtn>
            )}
        </>
    );
};

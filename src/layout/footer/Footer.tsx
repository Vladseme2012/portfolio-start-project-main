import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { S } from './Footer_Styles';

type SocialItemsData = {
    iconId: string;
};

const socialItemsData: Array<SocialItemsData> = [
    {
        iconId: 'instagram',
    },
    {
        iconId: 'telegram',
    },
    {
        iconId: 'vk',
    },
    {
        iconId: 'group',
    },
];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <S.SocialName>Svetlana</S.SocialName>
            <S.SocialList>
                {socialItemsData.map((socialItem, index) => (
                    <S.SocialItem key={index}>
                        <S.SocialIconLink>
                            <Icon
                                iconId={socialItem.iconId}
                                width={'21'}
                                height={'21'}
                                viewBox={'0 0 21 21'}
                            />
                        </S.SocialIconLink>
                    </S.SocialItem>
                ))}
            </S.SocialList>
            <S.SocialCopyright>
                © 2023 Svetlana Dyablo, All Rights Reserved.
            </S.SocialCopyright>
        </S.Footer>
    );
};

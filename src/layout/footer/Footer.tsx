import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';

export const Footer = () => {
    return (
        <StyledFooter>
            <SocialName>Svetlana</SocialName>
            <SocialList>
                <SocialItem>
                    <SocialIconLink>
                        I
                        <Icon
                            iconId={'instagram'}
                            width={'21px'}
                            height={'21px'}
                            viewBox={'0 0 21px 21px'}
                        />
                    </SocialIconLink>
                </SocialItem>
                <SocialItem>
                    <SocialIconLink>
                        I
                        <Icon
                            iconId={'telegram'}
                            width={'21px'}
                            height={'21px'}
                            viewBox={'0 0 21px 21px'}
                        />
                    </SocialIconLink>
                </SocialItem>
                <SocialItem>
                    <SocialIconLink>
                        I
                        <Icon
                            iconId={'vk'}
                            width={'21px'}
                            height={'21px'}
                            viewBox={'0 0 21px 21px'}
                        />
                    </SocialIconLink>
                </SocialItem>
                <SocialItem>
                    <SocialIconLink>
                        I
                        <Icon
                            iconId={'group'}
                            width={'21px'}
                            height={'21px'}
                            viewBox={'0 0 21px 21px'}
                        />
                    </SocialIconLink>
                </SocialItem>
            </SocialList>
            <SocialCopyright>
                © 2023 Svetlana Dyablo, All Rights Reserved.
            </SocialCopyright>
        </StyledFooter>
    );
};

const SocialName = styled.h3`
    color: red;
    text-align: center;
`;

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SocialList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
`;
const SocialItem = styled.li``;

const SocialIconLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
`;

const SocialCopyright = styled.small`
    color: red;
`;

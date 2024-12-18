import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { theme } from '../../styles/Theme';

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

const StyledFooter = styled.footer`
    padding: 40px 0;
    background-color: ${theme.colors.primaryBg};
`;

const SocialName = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;
`;

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`;
const SocialItem = styled.li``;

const SocialIconLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #ffffff19;
    border-radius: 50%;
    width: 35px;
    height: 35px;

    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`;

const SocialCopyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`;

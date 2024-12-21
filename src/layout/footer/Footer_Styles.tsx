import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

const Footer = styled.footer`
    padding: 40px 0;
    background-color: ${theme.colors.primaryBg};
`;

const SocialName = styled.span`
    ${font({
        family: "'Josefin Sans', sans-serif",
        weight: 700,
        fontMin: 16,
        fontMax: 22,
    })}

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

export const S = {
  Footer,
  SocialName,
  SocialList,
  SocialItem,
  SocialIconLink,
  SocialCopyright,
};

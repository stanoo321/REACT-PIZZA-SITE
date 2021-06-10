import React from "react";
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Follow Us</SocialLogo>
            <SocialIcons>
              <SocialIconsLink
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://twitter.com/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://www.snapchat.com/"
                target="_blank"
                aria-label="Snapchat"
                rel="noopener noreferrer"
              >
                <FaSnapchat />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

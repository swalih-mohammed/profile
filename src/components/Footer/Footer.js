import React from "react";
import { Button } from "../../globalStyles";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterDescription,
  FooterLinkTitleLocality
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>CONTACT</FooterLinkTitle>
        </FooterLinkItems>

        <FooterLinkItems>
          <a href="tel:+91 7207724191">7207724191</a>
        </FooterLinkItems>
        <FooterLinkItems>
          <a href="mailto:sibiyan9030@gmail.com">sibiyan9030@gmail.com</a>
        </FooterLinkItems>
        <SocialMediaWrap>
          <SocialIcons>
            <SocialIconLink
              href="https://github.com/sibiyan"
              target="_blank"
              aria-label="Instagram"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/swalihmohammed/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </FooterLinksWrapper>
    </FooterContainer>
  );
}

export default Footer;

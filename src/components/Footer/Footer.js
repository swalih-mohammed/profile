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
          <a href="tel:+91 9502768482">9502768482</a>
        </FooterLinkItems>
        <FooterLinkItems>
          <a href="mailto:swalihvpm@gmail.com">swalihvpm@gmail.com</a>
        </FooterLinkItems>
        <SocialMediaWrap>
          <SocialIcons>
            <SocialIconLink
              href="https://github.com/swalih-mohammed"
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

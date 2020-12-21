import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #101522;
  color: #fff;
  /* background-color: #fff; */
  /* background: ${({ lightBg }) => (lightBg ? "#fff" : "#002240")};  */
  padding: 4rem 0 2rem 0;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* width: 200px; */
  height: 300px;
  margin: 10px auto;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  /* width: 90%; */
  /* max-width: 1000px; */
  /* margin: 40px auto 10px auto; */
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
  /* width: 100%; */
  /* max-width: 1000px; */
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-right: 20px;
  padding-bottom: 5px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  /* color: #141413; */

  a {
    text-decoration: none;
    color: #fff;
    /* color: #141413; */
  }

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitleLocality = styled.h2`
  margin: 15px auto;
  display: flex;
  justify-content: center;
  /* color: #fff; */
  color: #141413;
  margin-top: 10px;
`;

export const FooterLinkTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin: 10px auto;
  padding-bottom: 20px;
`;
export const FooterDescription = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  /* color: #141413; */
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  /* color: #141413; */
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  /* color: #141413; */
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
  width: 100px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  /* color: #141413; */
  font-size: 24px;
`;

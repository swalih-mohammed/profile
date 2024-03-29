import styled from "styled-components";

export const InfoSec = styled.div`
  /* padding: 160px 0; */
  padding: 70px 0px;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#002240")}; 
  /* background: ${({ lightBg }) => (lightBg ? "#fff" : "#047aed")};  */
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: 'row'

`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 90%;
  flex-basis: 90%;


  @media screen and (max-width: 768px) {
    max-width: 100%;
    /* max-width: 90%; */
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  /* max-width: 40px; */
  padding-top: 0;
  padding-bottom: 60px;


  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  background-color: 'red'
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const SectionTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 500;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

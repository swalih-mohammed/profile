import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from "./Intro.elements";

function IntroSection({
  primary,
  lightBg,
  lightTopLine,
  lightText,
  lightTextDesc,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>
                  Assistant Manager - Arabic Langauge Expert - Full Stack Web-developer - Django - React - React Native - Next.JS
                </TopLine>
                <Heading lightText={lightText}>Swalih Mohammed</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Managing a team of Arabic language linguists for the last 2 and half years.
                  Traditionally educated in language and linguistics now turning
                  towards coding and web development. My keen interest also
                  includes using web-technologies in analysing and processing
                  human languages with Natural Langauge Processing (NLP)
                  technologies. I mainly create web applications with django (Python
                  framework) in the backend and React (javascript framework) in
                  the front-end. Presently develping an LMS mobile application with React Native and django backend.
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default IntroSection;

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
                  Arabic Langauge Expert - Full Stack Web-developer
                </TopLine>
                <Heading lightText={lightText}>Swalih Mohammed</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Traditionally educated in language and linguistics now turning
                  towards coding and web development. My keen interest also
                  includes using web-technologies in analysing and processing
                  human languages with Natural Langauge Processing (NLP)
                  technologies.I mainly create PWA apps with django (Python
                  framework) in the back-end and React (javascript framework) in
                  the front-end.
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

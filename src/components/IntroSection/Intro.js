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
                  Linguist and a computer science enthusiast
                </TopLine>
                <Heading lightText={lightText}>Swalih Mohammed</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Traditionally educated in language and linguistics now turning
                  towards coding and web development, often wondering how
                  technology could help language learning and teaching and also
                  exploring the possibilities of Natural Language Processing.
                  Mainly creating apps with python's django in the backend and
                  React front-end javascript framework
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

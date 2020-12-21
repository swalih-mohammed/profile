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
  Img,
  SectionTitle
} from "./Education.elements";

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
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
              <TextWrapper>
                <SectionTitle lightText={lightText}>EDUCATION</SectionTitle>
                <TopLine lightTopLine={lightTopLine}>
                  The English And Foreing languages University, 2016 to 2019
                </TopLine>
                <Heading lightText={lightText}>
                  Ph.D In Arabic Linguistics
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Towards designing a curriculum which focus more on developing
                  communication skill rather than understanding classical texts
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  The English And Foreing languages University, 2016 to 2019
                </TopLine>
                <Heading lightText={lightText}>
                  M.Phil in Arabic Linguistics
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  A comparative study between teaching methodology of Arabic
                  language both in traditional schools and modern schools.
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  The English And Foreing languages University, 2016 to 2019
                </TopLine>
                <Heading lightText={lightText}>
                  MA in Arabic Language and Literature
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Culture, history and literature of Arab world. Classical and
                  modern Arabic literature. Arabic Linguistics.
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  Calicut University, 2016 to 2019
                </TopLine>
                <Heading lightText={lightText}>
                  BA in English Language and Literature
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  English literature with introductory Linguistics courses along
                  with journalism and political science
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;

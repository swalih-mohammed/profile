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
} from "./Work.elements";

function IntroSection({
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
                <SectionTitle lightText={lightText}>
                  WORK AND EXPERIENCE
                </SectionTitle>
                <TopLine lightTopLine={lightTopLine}>
                  Optum Global Solution, 2019 to present
                </TopLine>
                <Heading lightText={lightText}>Management Trainee</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  I got the opportunity to be selected as a management Trainee
                  in the company and presently handling a team of 15. I feel so
                  lucky to have been given a team of great positivity which
                  welcomes all the good initiatives that I take and provide
                  honest reviews. I have also got tremendous opportunity to
                  automate a great number of manual tasks with the help of VBA
                  scripts.
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  Optum Global Solution, 2016 to 2019
                </TopLine>
                <Heading lightText={lightText}>
                  Bilingual Customer Service Associate
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Interaction with the US customers and health care providers
                  both in English and Arabic. Providing assistance both on email
                  and call.
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

export default IntroSection;

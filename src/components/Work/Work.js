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
                  Optum Global Solution, 2021 to present
                </TopLine>
                <Heading lightText={lightText}>Assistant Manager</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Leading a claim processing team of 30 members, which includes
                  Drives the fulfillment of performance metrics, Building and maintaining an effective Team environment,
                  Build and maintain effective relationships with 
                  internal leadership and offshore Supervisors, Managers and Directors etc.
                  Monitor, measure and report Team performance metrics and implement Team incentive programs,
                  Analyze and identify error trends and opportunities for defect reduction,
                  Administrative responsibilities as assigned Handles sensitive information appropriately (HIPAA) and acts in a fair and honest manner consistent with the company’s code of conduct,
                  Identifies trends and issues and recommend solutions.

                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  Optum Global Solution, 2019 to 2021
                </TopLine>
                <Heading lightText={lightText}>Management Trainee</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Leading a customer service team of 15, which includes
                  maintaining staff (recruiting, selecting, orienting, and
                  training) , identifying automation opportunity within the
                  process to eliminate manual effort and also ensure accuracy,
                  designing, applying and timely reviewing of VB scripts to make
                  sure automations are done accurately and efficiently.
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

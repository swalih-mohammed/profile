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
} from "./Projects.elements";

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
            {/* <InfoColumn> */}
            <TextWrapper>
              <SectionTitle lightText={lightText}>PROJECTS</SectionTitle>
              <TopLine lightTopLine={lightTopLine}>
                Visual Basic for Application (VB Script)
              </TopLine>
              <Heading lightText={lightText}>
                Track Missing Docs - Lean Project
              </Heading>
              <Subtitle lightTextDesc={lightTextDesc}>
                When docs are received on outlook inbox and they are to be sent
                to a specific department for further review, it is prone to
                error when it is done manually by an agent. This project made
                the entire process automated so that the agent could click on a
                button to see the attachments they missed to send.
              </Subtitle>
              
              <TopLine lightTopLine={lightTopLine}>
                Python - Django Blog
              </TopLine>
              <Heading lightText={lightText}>Local Dukans</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>
                Django is a high-level Python Web framework that encourages rapid development and clean design. Django Blog is a basic web app where post can be added, modified and deleted.
              </Subtitle>
            </TextWrapper>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;

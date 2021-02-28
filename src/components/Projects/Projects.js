import React from "react";
import { Link } from "react-router-dom";
import { ProjectData } from "../../pages/HomePage/Data";
import { Container, Button } from "../../globalStyles";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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
              {ProjectData.map((data, key) => {
                return (
                  <>
                    <TopLine lightTopLine={lightTopLine}>
                      {data.topLine}
                    </TopLine>
                    <Heading lightText={lightText}>{data.heading}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>
                      {data.description}
                    </Subtitle>

                    <Subtitle lightTextDesc={lightTextDesc}>
                      {data.demo ? (
                        <>
                          <span style={{ paddingRight: "10px" }}>
                            Find a live demo app
                          </span>

                          <a href={data.demo} target="_blank">
                            <FaExternalLinkAlt />
                          </a>
                        </>
                      ) : null}
                      {/* {data.github ? (
                        <>
                          <span
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px"
                            }}
                          >
                            Find codes in github
                          </span>

                          <a href={data.github} target="_blank">
                            <FaGithub />
                          </a>
                        </>
                      ) : null} */}
                    </Subtitle>
                  </>
                );
              })}
            </TextWrapper>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;

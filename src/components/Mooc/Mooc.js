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
} from "./Mooc.elements";

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
                <SectionTitle lightText={lightText}>
                  CERTIFICATIONS
                </SectionTitle>

                <TopLine lightTopLine={lightTopLine}>
                  On coursera Offered by Google, December 2020
                </TopLine>

                <Heading lightText={lightText}>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/27KJQ46WL7UK"
                  >
                    Google IT Automation with Python
                  </a>
                </Heading>

                <Subtitle lightTextDesc={lightTextDesc}>
                  This six-course certificate, developed by Google, is designed
                  to provide IT professionals with in-demand skills -- including
                  Python, Git, and IT automation -- that can help them advance
                  their careers. The hands-on curriculum is designed to teach
                  learners how to write code in Python.
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  On Udemy taught by Daniel Strong, December, 2018
                </TopLine>
                <Heading lightText={lightText}>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/certificate/UC-T6IKSQKK/"
                  >
                    The Ultimate Excel Programmer Course
                  </a>
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Automate and Customize data entry forms. Make Custom
                  Formulas/Functions. Generate reports. Manipulate Userforms for
                  data entry, report generation, editing tables/databases.
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  America’s Health Insurance Plans (AHIP), January, 2018
                </TopLine>
                <Heading lightText={lightText}>
                  <a
                    target="_blank"
                    href="https://www.ahip.org/course/healthcare-management-an-introduction-ahm-250/"
                  >
                    America's Health Insurance Plans (AHIP)
                  </a>
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  AHIP’s Healthcare Management: An Introduction (AHM250) course
                  help health care professionals better-serve healthcare members
                  and clients by strengthening understanding of the management
                  principles transforming health care.
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  On coursera offered by Wharton University, December, 2017
                </TopLine>
                <Heading lightText={lightText}>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/CUCMS2RKPCCN"
                  >
                    Business Analytics
                  </a>
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Data literacy and analytic mindset necessary to describe,
                  predict, and inform business decisions using big data in the
                  specific areas of marketing, human resources, finance, and
                  operations.
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  On Udemy taught by Kyle Pew, August, 2017
                </TopLine>

                <Heading lightText={lightText}>
                  <a
                    target="_blank"
                    href="https://www.udemy.com/certificate/UC-O46XEPWG/"
                  >
                    Microsoft Excel Beginner to Advanced
                  </a>
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Learn the most common Excel functions used in the Office.
                  Formulas with IF, VLOOKUP, INDEX, MATCH functions. Create
                  dynamic reports by mastering one of the most popular tools,
                  PivotTables.
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

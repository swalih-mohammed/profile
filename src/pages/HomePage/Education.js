import React from "react";
import { homeObjThree } from "./Data";
import { EducationSection } from "../../components";

function Edu() {
  return (
    <>
      <EducationSection {...homeObjThree} />
    </>
  );
}

export default Edu;

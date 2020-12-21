import React from "react";
import { homeObjFive } from "./Data";
import { ProjectSection } from "../../components";

function Project() {
  return (
    <>
      <ProjectSection {...homeObjFive} />
    </>
  );
}

export default Project;

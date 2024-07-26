import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Datastack from "../components/Skillset/Datastack";
import Learningstack from "../components/Skillset/Learningstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack/>

        <h1 className="project-heading">
          <strong className="yellow">Databases</strong> I use
        </h1>

        <Datastack/>

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack/>

        <h1 className="project-heading">
          What I'm currently <strong className="yellow">learning in my free time</strong>
        </h1>
        <Learningstack/>

        <Github/>
      </Container>
    </Container>
  )
}

export default Skillset
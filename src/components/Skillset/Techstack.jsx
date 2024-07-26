import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
    SiMaterialui,
    SiGraphql,
    SiSolidity,
    SiRedux,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiJavascript,
    SiSass,
    SiTailwindcss,
    SiPython,
    SiJava,
    SiScala,
    SiFlask,
    SiC,
    SiCplusplus, SiPhp, SiPowershell
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiJavascript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiTypescript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSass />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPhp />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScala />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;

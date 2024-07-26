import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
    SiNetlify,
    SiIntellijidea,
    SiWebstorm,
    SiPycharm,
    SiPhpstorm,
    SiPhpmyadmin,
    SiAndroidstudio,
    SiExpo,
    SiApache,
    SiCloudflare, SiGodaddy, SiFigma, SiTrello, SiJira, SiGithub, SiNotion
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpstorm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpmyadmin />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiExpo />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAndroidstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVercel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiApache />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFigma />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiTrello />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJira />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiNotion />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiCloudflare />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGodaddy />
        </Col>
    </Row>
  );
}

export default Toolstack;

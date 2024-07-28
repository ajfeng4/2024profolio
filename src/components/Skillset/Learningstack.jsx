import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiMongodb, SiFirebase, SiPostgresql, SiSupabase, SiAwsamplify, SiAmazon, SiGo, SiSwift, SiRuby
} from "react-icons/si";

const Learningstack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiSupabase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAmazon/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSwift />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGo/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRuby/>
            </Col>

        </Row>
    );
}

export default Learningstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiMongodb, SiFirebase, SiPostgresql
} from "react-icons/si";

const Datastack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql/>
            </Col>

        </Row>
    );
}

export default Datastack;
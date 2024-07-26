import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My Current <strong className="yellow">Coding</strong> Activity
      </h1>
      <GitHubCalendar
        username="ajfeng4"
        blockSize={15}
        blockMargin={5}
        color="#ff9900"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import hungie from "../assets/projects/Hungie.png";
import dystopia from "../assets/projects/Dystopiaaaa.png";
import brighter from "../assets/projects/Brighter.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hungie}
              isBlog={false}
              title="Hungie AI"
              description="Invovled in building an AI powered food buddy built to recommend and cater meals to meet the specific taste buds and preferences of users. Utilizing comprehensive alogrithms and machine learning models to serve up specific recommendations to meet the user's pallete. Developed front-end with clean and efficent user interfaces using Typescript,React Native and Tailwind CSS. Processed and managed backend with user perferences using Python and Flask. Ran the mobile IOS/Andriod environment using Expo Go. Managed and built the app's database and authentication using Firebase, Google Cloud and Sendgrid"
              ghLink=""
              demoLink="https://www.hungieapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dystopia}
              isBlog={false}
              title="Dystopia"
              description="Responsive social media application that gives users the full power to shape their social media landscape. Utilized JavaScript,Typescript,CSS and HTML to build a clean and responsive front-end. Dystopia is available not only through the web but also available and compatible on mobile. Utilized Swagger API to manage the backend database and to fetch and modify user attributes. Collaborated closely with a team of four software engineers to meet weekly objectives and maintain a strict and effective Agile enivronment meeting the requirements set by the Project Manager "
              ghLink=""
              demoLink="https://webdev.cse.buffalo.edu/hci/teams/zoomers"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={brighter}
                isBlog={false}
                title="Brighterspace"
                description="An interactive educational platform bridging the disconnect between learning and teaching. Utilized JavaScript,Typescript,React.js for front-end developement to build clean and scalabe screens and pages. Utilized PHP to manage the back-end database, to fetch and modify student data and retreive and display user atrributes. Utilized Apache to host the platform. Worked in an agile environment and meet weekly sprints and objectives set by the project manager"
                ghLink=""
                demoLink="https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  )
}

export default Projects
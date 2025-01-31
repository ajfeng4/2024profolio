import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import about from "../../assets/about.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {SiGmail, SiHandshake, SiLeetcode} from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hello!, my name is <span className="yellow">Alex Feng </span>
                 and I'm from <span className="yellow"> Brooklyn, New York.</span>
                <br />
                <br />
                  I'm currently a junior studying at <span className="yellow">SUNY University at Buffalo.</span> Currently double majoring in <span className="yellow">Computer Science and Management Information Systems</span>
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b>Software Engineer,
                  I enjoy learning new languages and building new projects to expand my skillset.
                  <br />
                  <br />I've worked frequently with
                    <b className="yellow"> Javascript, Typescript and PHP </b>
                    as well as have knowledge in programming languages such as Java, Python, Scala and C++
                  <br />
                  <br />
                  I have a passion for working
                  with cloud databases, my favorite is <b className="yellow">Firebase,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React, React Native and Expo</b>
                  </i>
                  <br />
                  <br />
                  In my free time I like to build and tinker with
                  <i>
                    <b className="yellow"> Mobile Apps and Web Applications, </b>
                    as well as read and build environments related to
                    <b className="yellow"> Cybersecurity.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={about} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                        href="https://github.com/ajfeng4"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        aria-label="github"
                    >
                      <AiFillGithub/>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/ajfeng/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        aria-label="linkedin"
                    >
                      <FaLinkedinIn/>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                        href="https://app.joinhandshake.com/profiles/35389210"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        aria-label="instagram"
                    >
                      <SiHandshake/>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                        href="ajfengcs@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        aria-label="instagram"
                    >
                      <SiGmail/>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
    );

}

export default About
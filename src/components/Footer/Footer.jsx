import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import {FaHandshake, FaLinkedinIn} from "react-icons/fa";
import {SiGmail, SiLeetcode} from "react-icons/si";
import logo from "../../assets/sLogo.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <span>Updated July 26th, 2024</span>
          </Col>
          <Col md="4" className="footer-copywright">
            <span>ajfeng@buffalo.edu</span>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                    href="https://github.com/ajfeng4"
                    style={{color: "white"}}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github"
                >
                  <AiFillGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/ajfeng/"
                    style={{color: "white"}}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                >
                  <FaLinkedinIn/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://app.joinhandshake.com/profiles/35389210"
                    style={{color: "white"}}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                >
                  <FaHandshake/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="ajfengcs@gmail.com"
                    style={{color: "white"}}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="leetcode"
                >
                  <SiGmail/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
}

export default Footer
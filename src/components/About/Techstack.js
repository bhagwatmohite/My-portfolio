import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiMysql } from "react-icons/di"; // MySQL icon
import { SiAmazonaws, SiBootstrap } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { FaJava } from "react-icons/fa";
import {
  SiFirebase,
  SiNextdotjs,
  SiPytorch, SiSpringboot
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />



      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap /> {/* Bootstrap icon */}
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws /> {/* AWS icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql /> {/* MySQL icon */}
      </Col>
    </Row>
  );
}

export default Techstack;

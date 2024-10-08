import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiEclipseide,
  SiHeroku,
  SiLinux,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> {/* Vercel icon */}
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide /> {/* Eclipse IDE icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;

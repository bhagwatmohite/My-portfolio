import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Home from "../../Assets/Projects/Home.png";
import Weather from "../../Assets/Projects/Weatherr.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Lab from "../../Assets/Projects/library.png";
import Spring from "../../Assets/Projects/spring.png";
import Ticket from "../../Assets/Projects/ticket.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Home}
              isBlog={false}
              title="House Rental Website"
              description="This is a house rental website that provides an intermediate platform for house owners and potential tenants looking to stay in a specific area. It features integrated full-fledged user authentication and utilizes Firestore database to store user data on the Firebase Cloud."
              ghLink="https://github.com/bhagwatmohite/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ticket}
              isBlog={false}
              title="Ticket System"
              description="I developed a ticket system website using the MERN full-stack. In this project, I created two dashboards—one for the admin and another for the user. The user's activity involves creating a ticket, and the system logs all actions associated with it."
              ghLink="https://github.com/bhagwatmohite/-Ticket"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spring}
              isBlog={false}
              title="CRUD-Operation(React + SpringBoot)"
              description="I developed an employee management website enabling employees to perform CRUD operations. The project involved implementing a MySQL database to store employee management data. Additionally, RESTful APIs were developed using the Spring Boot framework to execute CRUD operations on the MySQL and Hibernate database. The technologies utilized include HTML, CSS, JavaScript, React.js, Bootstrap, Spring Boot, Hibernate, MySQL, and RESTful API."
              ghLink="https://github.com/bhagwatmohite/fullstack_2"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="This app is developed using HTML, CSS, JavaScript, and ReactJs. OpenWeatherAPI is utilized for fetching live weather data, including minimum and maximum temperatures. The app supports two temperature units: Celsius and Fahrenheit. It features an attractive design for the 5-day forecast, displaying dates and weather descriptions."
              ghLink="https://github.com/bhagwatmohite/WeatherApp"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Stress-detection-using-ML"
              description="This is a Stress Detection using Machine Learning system designed to identify stress levels in organization employees. The project is implemented using Python, NumPy, Pandas, and Jupyter Notebook (Anaconda) as the primary tools."
              ghLink="https://github.com/bhagwatmohite"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lab}
              isBlog={false}
              title="Library management System"
              description="This is a Library Management System that facilitates various actions by the library administrator, including lending books, accepting book returns, managing charges or dues. The implementation incorporates variable data structures and algorithmic implementations such as stack, queue, hashMap, and linked list."
              ghLink="https://github.com/bhagwatmohite/"

            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

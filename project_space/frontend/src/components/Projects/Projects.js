import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ibm from "../../Assets/Projects/ibm.png"
import google from "../../Assets/Projects/google.png"
import darwin from "../../Assets/Projects/darwinbox.png";
import amazon from "../../Assets/Projects/amazon.png"
import tcs from "../../Assets/Projects/tcs.png"
import accenture from "../../Assets/Projects/accenture.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* <h1 className="project-heading">
        <strong className="purple">Placements </strong>
        </h1> */}
        <h1 className="project-heading">
        <strong className="white">Placement</strong>{" "}
        <strong className="purple">Companies</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="IBM"
              description="IBM, founded in 1911, is a global leader in technology and innovation. With a rich history spanning over a century, IBM has continually evolved to meet the changing needs of businesses and society. "
              demoLink="https://www.ibm.com/in-en"
            />
          </Col>

          <Col md={4} className="project-card">
      
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google"
              description="Google, founded in 1998, has become synonymous with innovation and technology excellence. As a global leader in internet-related services and products, Google's mission is to organize the world's information and make it universally accessible and useful. "
              demoLink="https://about.google/intl/ALL_in/"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={darwin}
              isBlog={false}
              title="DarwinBox"
              description="Darwinbox, founded in 2015, is a dynamic and innovative HR technology company revolutionizing the way organizations manage their workforce. "
              demoLink="https://darwinbox.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon"
              description="Amazon, founded in 1994 by Jeff Bezos, is a global technology and retail powerhouse known for its relentless commitment to customer satisfaction and innovation."
              demoLink="https://www.amazon.jobs/job_categories/software-development"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tcs}
              isBlog={false}
              title="TCS"
              description="Tata Consultancy Services (TCS), established in 1968, is a global leader in IT services, consulting, and business solutions. Headquartered in Mumbai, India, TCS operates in over 50 countries, serving a diverse clientele spanning multiple industries. "
              demoLink="https://www.tcs.com/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accenture}
              isBlog={false}
              title="Accenture"
              description="Accenture, a global professional services company, is renowned for its expertise in strategy, consulting, digital, technology, and operations. With a presence in over 200 cities across 120 countries."
              demoLink="https://www.accenture.com/in-en"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

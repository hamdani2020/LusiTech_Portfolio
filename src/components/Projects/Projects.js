import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zaid from "../../Assets/Projects/zaid.png";
import blogs from "../../Assets/Projects/blogs.png";
import meme from "../../Assets/Projects/meme.png";
import ec from "../../Assets/Projects/ec.png";
import ham from "../../Assets/Projects/ham.png";
import hostel from "../../Assets/Projects/hostel.jpg";

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
              imgPath={ec}
              isBlog={false}
              title="Election Management System"
              description="Election managements system that I built for GMSA using PHP."
              ghLink="https://github.com/hamdani2020/Election_management_software"
             // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meme}
              isBlog={false}
              title="Meme Generator"
              description="Meme Generator created with Reactjs the help Memers to create memes"
              ghLink="https://github.com/hamdani2020/Meme_Generator"
              demoLink="https://lusitechmeme.netfly.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostel}
              isBlog={false}
              title="Hostel Management System"
              description="Hostel Management system created with Django."
              ghLink="https://github.com/hamdani2020/Hostel_management_system"
             // demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zaid}
              isBlog={false}
              title="Portfolio Website"
              description="A portfolio website is created for a logistics company called Samben Logistics."
              ghLink="https://github.com/hamdani2020/zaid"
              demoLink="https://sambenlogistics.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogs}
              isBlog={false}
              title="Simple blog website"
              description="This is a personal blogging website for my tech contents."
              //ghLink="#"
              demoLink="https://www.lusitechblog.ga"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ham}
              isBlog={false}
              title="HTML and CSS Portfolio Website"
              description="Portfolio website built with only HTML and CSS with dark mode feature."
              ghLink="https://github.com/hamdani2020/hamdanialhassan"
              demoLink="https://hamdani2020.github.io/hamdanialhassan"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

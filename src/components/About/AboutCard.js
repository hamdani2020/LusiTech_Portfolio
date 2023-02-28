import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alhassan Hamdani Gandi </span>
            from <span className="purple"> Accra, Ghana.</span>
            <br />I am an undergraduate Geomatic Engineering student at KNUST, Alx Software Engineering Trainee, 
            and an Aspiring Fullstack Software Engineer.
            <br />
            <br />
            I am also an I.T enthusiast and GIS enthusiast, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am because we are"{" "}
          </p>
          <footer className="blockquote-footer">Ubuntu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

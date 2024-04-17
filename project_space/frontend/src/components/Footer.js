import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  // AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        
        <Col md="12" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Footer;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faXTwitter, faInstagram,faGithub  } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';

export function Footer() {
    const footerStyle = {
        backgroundColor: "#343a40",
        color: "#ffffff",
        padding: "20px 0",
        textAlign: "center",
      };
    
      const iconStyle = {
        color: "#ffffff",
        fontSize: "24px",
        marginLeft: "25",
        marginRight : "25"
      };
    return(
       <Container>
         <Row>
            <Col lg={12}>
            <footer style={footerStyle} className=" bg-dark text-white">
            <p>&copy; 2023 CropHarbor</p>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} style={iconStyle}/>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} style={iconStyle}/>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
            </a>
        </footer>
            </Col>
         </Row>
       </Container>
    );
}
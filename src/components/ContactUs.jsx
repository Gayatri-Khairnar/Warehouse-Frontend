import { Container, Row, Image, Col } from "react-bootstrap";
import Harshal from '../images/Harshal.jpg';
import Gayatri from '../images/Gayatri.png';
import Nitish from '../images/Nitish.jpg';
import Mayur from '../images/Mayur.jpeg.jpg';
import Tanaya from '../images/Tanaya.jpg';
import GmailLogo from '../images/GmailLogo.png'; 
import LinkedinLogo from '../images/LinkedinLogo.png'; 
export function ContactUs(){
    return (
        <Container fluid className="align-items-center justify-content-center" style={{ textAlign: "center" }}>
            <Row>
                <Col lg={12}>
                <Row>
                <Col>
                <Row className="mt-4 align-items-center justify-content-center" style={{ color: 'black' }}>
                <Col xs={6} md={3}>
                    <Image style={{ height: '300px' }} src={Gayatri} rounded />
                    <h3>Gayatri Khairnar</h3>
                   <h5> <img src={GmailLogo} alt="Gmail Logo" style={{ marginRight: '5px', height: '20px' }} />gaytri@gmail.com</h5>
                   <h5><img src={LinkedinLogo} alt="LinkedIn Logo" style={{ marginLeft: '5px', height: '20px' }} />Linkedin</h5>
    
                </Col>
                <Col xs={6} md={3}>
                    <Image style={{ height: '300px' }} src={Tanaya} rounded />
                    <h3>Tanaya Bornare</h3>
                    <h5><img src={GmailLogo} alt="Gmail Logo" style={{ marginRight: '5px', height: '20px' }} /> tanaya@gmail.com</h5>
                    <h5><img src={LinkedinLogo} alt="LinkedIn Logo" style={{ marginLeft: '5px', height: '20px' }} />Linkedin</h5>
    
                </Col>
                <Col xs={6} md={3}>
                    <Image style={{ height: '300px' }} src={Nitish} rounded />
                    <h3>Nitish Patil</h3>
                    <h5><img src={GmailLogo} alt="Gmail Logo" style={{ marginRight: '5px', height: '20px' }} /> nitish@gmail.com</h5>
                    <h5><img src={LinkedinLogo} alt="LinkedIn Logo" style={{ marginLeft: '5px', height: '20px' }} />Linkedin</h5>
    
                </Col>
            </Row>
            <Row className="mt-4 align-items-center justify-content-center" style={{ color: 'black' }}>
                <Col xs={6} md={3}>
                    <Image style={{ height: '300px' }} src={Harshal} rounded />
                    <h3>Harshal Sapkale</h3>
                    <h5><img src={GmailLogo} alt="Gmail Logo" style={{ marginRight: '5px', height: '20px' }} /> harshal@gmail.com</h5>
                    <h5><img src={LinkedinLogo} alt="LinkedIn Logo" style={{ marginLeft: '5px', height: '20px' }} />Linkedin</h5>
    
                </Col>
                <Col xs={6} md={3}>
                    <Image style={{ height: '300px' }} src={Mayur} rounded />
                    <h3>Mayur Thoke</h3>
                    <h5><img src={GmailLogo} alt="Gmail Logo" style={{ marginRight: '5px', height: '20px' }} /> mayur@gmail.com</h5>
                    <h5><img src={LinkedinLogo} alt="LinkedIn Logo" style={{ marginLeft: '5px', height: '20px' }} />Linkedin</h5>
    
                </Col>
            </Row>
                </Col>
            </Row>
                </Col>
            </Row>
        </Container>
    );
}

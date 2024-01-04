import { Container,Row,Col,Carousel } from "react-bootstrap";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
export function MyCarousel() {
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <Carousel>
                        <Carousel.Item>
                            <img src={img1}  ></img>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={img2}  ></img>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={img3}  ></img>
                            
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}
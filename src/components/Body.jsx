import { Col, Container, Row,Button } from "react-bootstrap";

export function Body() {
    return(
        <Container>
            <Row>
                <Col lg={4}>
                    <div class="p-3  bg-success text-white">
                    <h1>Our Warehouses</h1>
                    <p>Our warehouse is a well-organized space featuring a diverse inventory, from electronics to office essentials. Equipped with advanced tracking technology, we ensure efficient management and timely fulfillment of orders. Precision and innovation drive our commitment to top-notch logistics.</p>
                    <Button variant="warning"><a href="/warehouses" style={{textDecoration:"none",color:"white"}}>Know more</a></Button>
                    </div>
                </Col>
                <Col lg={4}>
                    <div class="p-3  bg-light text-dark">
                    <h1>Weather</h1>
                    <p>Warehouses must prioritize climate control, humidity management, and robust infrastructure to safeguard temperature-sensitive goods. Developing contingency plans for transportation delays due to adverse weather, implementing safety measures, and leveraging advanced weather monitoring technologies are crucial. Comprehensive insurance coverage adds an extra layer of protection against potential weather-related challenges.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div class="p-3  bg-info text-white">
                    <h1>Top News</h1>
                    <p>Recent warehouse developments highlight a shift towards automation and technology adoption, as robotics and AI-driven systems enhance operational efficiency. Sustainability practices, including eco-friendly initiatives and energy-efficient solutions, are on the rise. The booming e-commerce sector is driving increased demand for strategically located fulfillment centers, prompting companies to expand their warehouse networks.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
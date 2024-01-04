import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

export function AdminNavbar() {
  return(
    <Container>
      <Row>
        <Col lg={12}>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Users</Nav.Link>
            <Nav.Link href="#features">Warehouses</Nav.Link>
            <Nav.Link href="#pricing">Orders</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
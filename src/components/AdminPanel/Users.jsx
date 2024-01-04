import { Button, Col, Container, Row, Table } from "react-bootstrap";
export function Users() {
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>State</th>
                                <th>District</th>
                                <th>More Info</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john.doe@example.com</td>
                                <td>New York</td>
                                <td>Manhattan</td>
                                <td><Button variant="info">Info</Button></td>
                                <td><Button variant="success">Success</Button></td>
                                <td><Button variant="danger">Danger</Button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>jane.smith@example.com</td>
                                <td>California</td>
                                <td>Los Angeles</td>
                                <td><Button variant="info">Info</Button></td>
                                <td><Button variant="success">Success</Button></td>
                                <td><Button variant="danger">Danger</Button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bob Johnson</td>
                                <td>bob.johnson@example.com</td>
                                <td>Texas</td>
                                <td>Houston</td>
                                <td><Button variant="info">Info</Button></td>
                                <td><Button variant="success">Success</Button></td>
                                <td><Button variant="danger">Danger</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
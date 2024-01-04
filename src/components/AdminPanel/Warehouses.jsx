import { Col, Container, Row, Table } from "react-bootstrap";
export function Warehouses() {
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Occupied Storage</th>
                                <th>Vaccand Storage</th>
                                <th>More Info</th>
                                <th>Increase Storage</th>
                                <th>Reduce Storage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Storage Facility 1</td>
                                <td>New York</td>
                                <td>7000 tons</td>
                                <td>2000 tons</td>
                                <td><a href="#" class="btn btn-info">View</a></td>
                                <td><a href="#" class="btn btn-success">Increase</a></td>
                                <td><a href="#" class="btn btn-danger">Reduce</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Storage Facility 2</td>
                                <td>California</td>
                                <td>6000 tons</td>
                                <td>3000 tons</td>
                                <td><a href="#" class="btn btn-info">View</a></td>
                                <td><a href="#" class="btn btn-success">Increase</a></td>
                                <td><a href="#" class="btn btn-danger">Reduce</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Storage Facility 3</td>
                                <td>Texas</td>
                                <td>8000 tons</td>
                                <td>1000 tons</td>
                                <td><a href="#" class="btn btn-info">View</a></td>
                                <td><a href="#" class="btn btn-success">Increase</a></td>
                                <td><a href="#" class="btn btn-danger">Reduce</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
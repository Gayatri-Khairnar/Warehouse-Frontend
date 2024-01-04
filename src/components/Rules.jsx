import { Container,Row,Col } from "react-bootstrap";
import {Chapter1} from '../components/rules/Chapter1';
import {Chapter2} from '../components/rules/Chapter2';
import {Chapter3} from '../components/rules/Chapter3';
import {Chapter4} from '../components/rules/Chapter4';
import {Chapter5} from '../components/rules/Chapter5';
import {Chapter6} from '../components/rules/Chapter6';
import { Route } from "react-router-dom";

export function Rules() {
    return(
        <Container>
            <Row>
                <Col>
                    <Chapter1></Chapter1>
                    <Chapter2></Chapter2>
                    <Chapter3></Chapter3>
                    <Chapter4></Chapter4>
                    <Chapter5></Chapter5>
                    <Chapter6></Chapter6>         
                </Col>
            </Row>
        </Container>
    );
}
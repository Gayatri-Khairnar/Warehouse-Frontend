import { Col, Container,Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export function AboutUs() {
  const questions = [
    {
      question: 'Question 1',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    },
    {
      question: 'Question 2',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    },
    {
      question: 'Question 3',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    },
    {
      question: 'Question 4',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    },
    {
      question: 'Question 5',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    },
    {
      question: 'Question 6',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    },
    {
      question: 'Question 7',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    },
    {
      question: 'Question 8',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    },
    {
      question: 'Question 9',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    },
    {
      question: 'Question 10',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    },
  ];

  return (
    <Container>
      <Row>
        <Col lg={12}>
        <Accordion defaultActiveKey="0">
      {questions.map((q, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{q.question}</Accordion.Header>
          <Accordion.Body>{q.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5151/user/login', formData);
      console.log('Login Form Submitted:', formData);
      console.log('Response:', response.data);
  
      alert(response.data.message);
    } catch (error) {
      console.error('Error during login:', error);
  
      if (error.response && error.response.status === 500) {
        
        alert('Either your credentials are wrong or you don\'t have any account, go for registration either');
      } else {
        
        alert('An error occurred during login. Please try again.');
      }
    }
  };
  
  
  

  return (
    <Container>
        <Row>
            <Col>
            <Container fluid style={{ backgroundImage: 'url(https://okcredit-blog-images-prod.storage.googleapis.com/2021/11/agriculturalwarehouse1.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} md={6} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '30px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 className="mb-4">Welcome to SignIn</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>

          <p className="mt-3">If you have no account, create through registration</p>
          <Button variant="primary" className="w-100">
            <a href="/registration" className="text-decoration-none text-white">Registration</a>
          </Button>
        </Col>
      </Row>
    </Container>
            </Col>
        </Row>
    </Container>
  );
};

export default Login;

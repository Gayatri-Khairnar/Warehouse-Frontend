import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: 'MALE',
    contactNo: '',
    status: 'ACTIVE',
    address: {
      state: '',
      district: '',
      city: '',
      village: '',
      pincode: '',
    },
    roleName: 'FARMER', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5151/user/register', formData);
      console.log('Login Form Submitted:', formData);
      console.log('Response:', response.data);
  
      alert(response.data.message);
    } catch (error) {
      console.error('Error during login:', error);
  
      if (error.response && error.response.status === 500) {
        
        alert('You already have an account, please login with your credentials');
      } else {
        
        alert('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <Container fluid style={{ padding: 0 }}>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} md={10}>
          <div
            style={{
              backgroundImage:
                'url("https://okcredit-blog-images-prod.storage.googleapis.com/2021/11/agriculturalwarehouse1.jpg")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                maxWidth: '500px',
                width: '100%',
              }}
            >
              <h2 style={{ textAlign: 'center' }}>Registration Form</h2>
              <Form onSubmit={handleSubmit}>
                {/* Input fields */}
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  style={{ marginBottom: '10px' }}
                  required
                />
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  style={{ marginBottom: '10px' }}
                  required
                />
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  style={{ marginBottom: '10px' }}
                  required
                />
                <Form.Control
                  as="select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }}
                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </Form.Control>
                <Form.Control
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  style={{ marginBottom: '10px' }}
                  required
                />

                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      as="select"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="ACTIVE">Active</option>
                      <option value="INACTIVE">Inactive</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      name="roleName" // Corrected name attribute
                      value={formData.roleName}
                      onChange={handleChange}
                    >
                      <option value="FARMER">Farmer</option>
                      <option value="BUYER">Buyer</option>
                      <option value="ADMIN">Admin</option>
                    </Form.Control>
                  </Col>
                </Row>

                {/* Address fields */}
                <Form.Control
                  type="text"
                  name="address.state"
                  value={formData.address.state}
                  onChange={handleChange}
                  placeholder="State"
                  style={{ marginBottom: '10px' }}
                  required
                />
                <Form.Control
                  type="text"
                  name="address.district"
                  value={formData.address.district}
                  onChange={handleChange}
                  placeholder="District"
                  style={{ marginBottom: '10px' }}
                  required
                />
                <Form.Control
                  type="text"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleChange}
                  placeholder="City"
                  style={{ marginBottom: '10px' }}
                  required
                />
                <Form.Control
                  type="text"
                  name="address.village"
                  value={formData.address.village}
                  onChange={handleChange}
                  placeholder="Village"
                  style={{ marginBottom: '10px' }}
                  required
                />
                <Form.Control
                  type="text"
                  name="address.pincode"
                  value={formData.address.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                  style={{ marginBottom: '10px' }}
                  required
                />

                {/* Role field */}
                <Button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Register
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [userId]);

  const handleAddClick = () => {
    // Assuming you have a backend API endpoint for adding data
    fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Pass any data you want to add
        userId: userId,
        // Other data...
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the user data in the state or perform any necessary actions
        setUserData((prevUserData) => ({ ...prevUserData, ...data }));
        console.log('Add successful:', data);
      })
      .catch((error) => console.error('Error adding data:', error));
  };

  const handleDeleteClick = () => {
    // Assuming you have a backend API endpoint for deleting data
    fetch(`/api/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Update the user data in the state or perform any necessary actions
          setUserData(null);
          console.log('Delete successful');
        } else {
          console.error('Error deleting data:', response.statusText);
        }
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  return (
    <Container>
      <Row>
        <Col>
          {userData && (
            <Card>
              <Card.Body>
                <Card.Title>User Profile</Card.Title>
                <Card.Text>
                  <strong>Name:</strong> {userData.name} <br />
                  <strong>Email:</strong> {userData.email} <br />
                  <strong>Gender:</strong> {userData.gender} <br />
                  <strong>Contact No:</strong> {userData.contactNo} <br />
                  <strong>Status:</strong> {userData.status} <br />
                  <strong>Address:</strong> {userData.address.city}, {userData.address.district}, {userData.address.state} - {userData.address.pincode} <br />
                  <strong>Role:</strong> {userData.role.roleName}
                </Card.Text>
                <Button variant="primary" onClick={handleAddClick}>
                  Update
                </Button>{' '}
                <Button variant="danger" onClick={handleDeleteClick}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
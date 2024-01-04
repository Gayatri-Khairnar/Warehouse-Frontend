import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';

const WarehousePage = () => {
  const warehouses = [
    {
      name: 'Warehouse A1',
      location: 'JALGOAN',
      capacity: '1000 sq. m.',
      imageUrl: 'https://media.istockphoto.com/id/1009023546/photo/warehouse.webp?b=1&s=170667a&w=0&k=20&c=ZZDKiitFLHbvKP_LcdRAXsobDpfzgaRk-f3uaqwADUs=',
      description: 'This is Warehouse A, serving the JALGOAN area.',
      contact: 'Contact: warehouseA@example.com',
    },
    {
      name: 'Warehouse A2',
      location: 'JALGOAN',
      capacity: '1000 sq. m.',
      imageUrl: 'https://media.istockphoto.com/id/1009023546/photo/warehouse.webp?b=1&s=170667a&w=0&k=20&c=ZZDKiitFLHbvKP_LcdRAXsobDpfzgaRk-f3uaqwADUs=',
      description: 'This is Warehouse A, serving the JALGOAN area.',
      contact: 'Contact: warehouseA@example.com',
    },
    {
      name: 'Warehouse B',
      location: 'KOLHAPUR',
      capacity: '1500 sq. m.',
      imageUrl: 'https://img.freepik.com/premium-photo/industrial-building-against-blue-sky-factory_186673-4428.jpg',
      description: 'This is Warehouse B, serving the KOLHAPUR area.',
      contact: 'Contact: warehouseB@example.com',
    },
    {
      name: 'Warehouse C',
      location: 'NASHIK',
      capacity: '1200 sq. m.',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/11/RC/VX/ZV/133645110/warehousing-rent-500x500.jpg',
      description: 'Warehouse C in NASHIK is a hub for shipping and storage.',
      contact: 'Contact: warehouseC@example.com',
    },
    {
      name: 'Warehouse D',
      location: 'NAGPUR',
      capacity: '800 sq. m.',
      imageUrl: 'https://www.gamma-uk.com/app/uploads/2018/10/bb82748a-new_warehouse_outside_1900x1300.jpg',
      description: 'Warehouse D serves the NAGPUR area for quick deliveries.',
      contact: 'Contact: warehouseD@example.com',
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
        <div>
    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Warehouse Information</h1>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '30px',
      }}
    >
      {warehouses.map((warehouse, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '300px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
          }}
          className="card"
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '150px',
              overflow: 'hidden',
            }}
            className="card-header"
          >
            <img
              src={warehouse.imageUrl}
              alt={warehouse.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              className="warehouse-image"
            />
          </div>
          <div style={{ padding: '20px' }} className="card-body">
            <h2 style={{ marginBottom: '10px', color: '#333' }}>{warehouse.name}</h2>
            <p style={{ color: '#666', marginBottom: '8px' }}>Location: {warehouse.location}</p>
            <p style={{ color: '#666', marginBottom: '8px' }}>Capacity: {warehouse.capacity}</p>
            <p style={{ color: '#333' }}>{warehouse.description}</p>
            <p style={{ color: '#333' }}>{warehouse.contact}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WarehousePage;
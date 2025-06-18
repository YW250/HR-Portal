import React from 'react';
import newsList from '../news';
import { Card, Row, Col } from 'react-bootstrap';

function News() {
  return (
    <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', padding: '1rem', borderRadius: '8px' }}>
      <h2 className="mb-4" style={{ textAlign: 'center' }}>Latest News</h2>
      <Row>
        {newsList.map((news, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={news.image} style={{ height: '180px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;

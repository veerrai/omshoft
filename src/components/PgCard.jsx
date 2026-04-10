import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const PgCard = ({ item }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Row>
        <Col md={4}>
          <Card.Img src={item.image} />
        </Col>

        <Col md={8} className="p-3">
          <h5 className="fw-bold">{item.name}</h5>
          <p className="text-muted">{item.location}</p>

          <Row className="mb-3">
            <Col>₹{item.price}/mo</Col>
            <Col className="text-end">
              <span className="badge bg-secondary gender" >
                {item.gender}
              </span>
            </Col>
          </Row>

          <Button variant="primary" className="me-2 reverse-btn" >
            Reserve Now
          </Button>
          <Button variant="warning" className="sed-btn">
            Schedule A Visit
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default PgCard;
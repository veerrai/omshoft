import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const FilterBar = ({ setGender, setLocation, setSort }) => {
  return (
    <Row className="mb-4">
      
      <Col md={4}>
        <Form.Select onChange={(e) => setGender(e.target.value)}>
          <option value="all">All Genders</option>
          <option value="boys">Boys</option>
          <option value="girls">Girls</option>
        </Form.Select>
      </Col>

      <Col md={4}>
        <Form.Select onChange={(e) => setLocation(e.target.value)}>
          <option value="all">All Locations</option>
          <option value="Sector 126 Noida/ Amity University">
            Sector 126 Noida/ Amity University
          </option>
          <option value="Sector 126/125 Noida / Amity University">
            Sector 126/125 Noida / Amity University
          </option>
          <option value="Sector 44 Noida">Sector 44 Noida</option>
        </Form.Select>
      </Col>

      <Col md={4}>
        <Form.Select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </Form.Select>
      </Col>

    </Row>
  );
};

export default FilterBar;
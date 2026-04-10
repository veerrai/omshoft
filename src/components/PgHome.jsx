import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FilterBar from "./FilterBar";
import PgCard from "./PgCard";
import pgData from "./data";

const PgHome = () => {
  const [gender, setGender] = useState("all");
  const [location, setLocation] = useState("all");
  const [sort, setSort] = useState("");

  const filteredData = pgData
    .filter((item) => {
      return (
        (gender === "all" || item.gender === gender) &&
        (location === "all" || item.location === location)
      );
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <Container className="mt-4">
      <FilterBar
        setGender={setGender}
        setLocation={setLocation}
        setSort={setSort}
      />

      {/* ✅ GRID FIX */}
      <Row>
        {filteredData.map((item) => (
          <Col md={6} key={item.id}>
            <PgCard item={item} />
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default PgHome;
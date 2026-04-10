import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImg from "../images/banner.webp"; // 👈 single collage image

const HomeBanner = () => {
  return (
    <div style={{ background: "#f5f5f5", padding: "60px 0" }}>
      <Container>
        <Row className="align-items-center">

          {/* LEFT CONTENT */}
         <Col lg={6} className="banner-left">

  <h1 className="banner-title">
    <span className="blue">COMFORTABLE & AFFORDABLE</span><br/>
    PG ROOMS JUST FOR <span className="orange">YOU!</span>
  </h1>

  <button className="view-btn">
    View Rooms ⚡
  </button>

  <div className="search-box">
    <input placeholder="Select your ideal PG room" />
    <button className="pg-btn">PG Now</button>
  </div>

</Col>

          {/* RIGHT SIDE SINGLE IMAGE */}
          <Col lg={6} className="text-center ">
            <img
              src={bannerImg}
              alt="PG Rooms"
              className="img-fluid"
              style={{
                objectFit: "contain",
              }}
            />
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default HomeBanner;
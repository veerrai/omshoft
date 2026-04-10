import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <Container className="d-flex justify-content-end gap-4">
          <span>
            <FaPhoneAlt className="me-2" />
            +91-8130238788
          </span>
          <span>
            <FaEnvelope className="me-2" />
            info@pgnow.co.in
          </span>
        </Container>
      </div>

      <Navbar expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="	https://pgnow.co.in/images/logo.webp" 
              height="90"
            />
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Our Livings</Nav.Link>
              <Nav.Link href="/">
                Know More ▾
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
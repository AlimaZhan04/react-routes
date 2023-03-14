import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Link to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>

          <Link to="/about-us">
            <Navbar.Brand>About Us</Navbar.Brand>
          </Link>
          <Link to="/contacts">
            <Navbar.Brand>Contacts</Navbar.Brand>
          </Link>

          <Link to="/elected">
            <Navbar.Brand>Elected</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;

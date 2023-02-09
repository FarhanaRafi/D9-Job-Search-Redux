import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const favLength = useSelector((state) => state.favorites.content.length);
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Epi-Jobs</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to={"/"}>
          <Nav.Link href="#home">Home</Nav.Link>
        </Link>
      </Nav>
      <Button variant="light" onClick={() => navigate("/favorites")}>
        Favorites
        <span className="ml-2">{favLength}</span>
      </Button>
    </Navbar>
  );
}

export default Header;

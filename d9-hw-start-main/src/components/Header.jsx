import React from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUsernameAction } from "../redux/actions";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const favLength = useSelector((state) => state.favorites.content.length);
  const [inputValue, setInputValue] = useState("");

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Epi-Jobs</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to={"/"}>
          <Nav.Link href="#home">Home</Nav.Link>
        </Link>
      </Nav>
      {userName ? (
        <>
          <span className="mr-4 text-white">Hello, {userName} </span>
          <Button variant="light" onClick={() => navigate("/favorites")}>
            Favorites
            <span className="ml-2">{favLength}</span>
          </Button>
        </>
      ) : (
        <Form
          onSubmit={(e) => {
            e.preventDefault(); // avoids refreshing the page
            dispatch(setUsernameAction(inputValue));
            // we want the content of the input field to reach the reducer
            // and become the new state.user.name :)
          }}
        >
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Log in here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Form.Group>
        </Form>
      )}
    </Navbar>
  );
}

export default Header;

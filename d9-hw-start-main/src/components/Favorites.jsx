import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Col, Row, Button, Container } from "react-bootstrap";

const Favorites = () => {
  let favorite = useSelector((state) => state.favorites.content);
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <Row>
          <h1>Favorites</h1>
          <Col sm={12}>
            <ul style={{ listStyle: "none" }}>
              {favorite.map((job, i) => (
                <li key={i} className="my-4">
                  <Link to={`/${job.company_name}`}>{job.company_name} </Link>
                  <Button
                    className="ml-5"
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVORITE",
                        payload: i,
                      });
                    }}
                  >
                    <FaTrash />
                  </Button>
                  <Button className="ml-5">Details</Button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Favorites;

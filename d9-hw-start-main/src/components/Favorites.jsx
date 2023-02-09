import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Col, Row, Button } from "react-bootstrap";

const Favorites = () => {
  let favorite = useSelector((state) => state.favorites.content);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Favorites</h1>
      <Row>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {favorite.map((job, i) => (
              <li key={i} className="my-4">
                <Button
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

                {job.title}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Favorites;

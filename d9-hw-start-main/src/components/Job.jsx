import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const buttonClick = () => {
    setActive(!active);
  };
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <div onClick={buttonClick}>
          <AiFillHeart
            style={{ fontSize: 25 }}
            color={active ? "dodgerblue" : "black"}
            onClick={() => {
              dispatch({
                type: "ADD_TO_FAVORITES",
                payload: data,
              });
            }}
          />
        </div>
      </Col>
    </Row>
  );
};
export default Job;

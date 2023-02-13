import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { addToFavoritesAction } from "../redux/actions";
import { useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const userName = useSelector((state) => state.user.name);

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
      {userName ? (
        <Col xs={3}>
          {/* onClick={buttonClick} */}
          <AiFillHeart
            style={{ fontSize: 25 }}
            color={active ? "dodgerblue" : "black"}
            onClick={() => {
              buttonClick();
              dispatch(addToFavoritesAction(data));
            }}
          />
        </Col>
      ) : (
        <div>You need to log in first!</div>
      )}
    </Row>
  );
};
export default Job;

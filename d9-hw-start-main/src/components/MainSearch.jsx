import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getJobActionAsync } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobFromRedux = useSelector((state) => state.job.jobDetails);
  const dispatch = useDispatch();
  const loadingSpinner = useSelector((state) => state.job.isLoading);
  const error = useSelector((state) => state.job.isError);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(getJobActionAsync(query));
            }}
          >
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loadingSpinner && (
            <Spinner
              animation="border"
              variant="success"
              className="spinners"
            />
          )}
          {error && <Alert variant="danger">Something went wrong</Alert>}
          {jobFromRedux.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

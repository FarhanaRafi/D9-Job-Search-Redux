import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const MainSearch = () => {
  // const navigate = useNavigate();
  // const favLength = useSelector((state) => state.favorites.content.length);

  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // https://strive-jobs-api.herokuapp.com/jobs?search=

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          {/* <Button onClick={() => navigate("/favorites")}>
            Favorites
            <span className="ml-2">{favLength}</span>
          </Button> */}
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

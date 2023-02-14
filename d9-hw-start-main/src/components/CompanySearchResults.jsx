/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyActionAsync } from "../redux/actions";
import { useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const dispatch = useDispatch();

  // const [jobs, setJobs] = useState([]);
  const params = useParams();
  const companyFromRedux = useSelector((state) => state.company.stock);
  const loadingSpinner = useSelector((state) => state.company.isLoading);
  const error = useSelector((state) => state.company.isError);

  // const baseEndpoint =
  //   "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    dispatch(getCompanyActionAsync(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.companyName);
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col>
          {loadingSpinner && <Spinner animation="border" variant="success" />}
          {error && <Alert variant="danger">Something went wrong</Alert>}
          {companyFromRedux.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

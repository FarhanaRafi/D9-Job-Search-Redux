/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyActionAsync } from "../redux/actions";
import { useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const companyFromRedux = useSelector((state) => state.company.stock);
  const loadingSpinner = useSelector((state) => state.company.isLoading);
  const error = useSelector((state) => state.company.isError);

  useEffect(() => {
    dispatch(getCompanyActionAsync(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

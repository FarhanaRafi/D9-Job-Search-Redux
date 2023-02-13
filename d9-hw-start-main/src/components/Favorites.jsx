import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { format, parseISO } from "date-fns";
import { useState } from "react";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import { removeFromFavoritesAction } from "../redux/actions";

const Favorites = () => {
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);
  let favorite = useSelector((state) => state.favorites.content);
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <h1 className="text-center">Favorites</h1>
        <Table hover>
          <tbody>
            {favorite.map((job, i) => (
              <>
                <tr key={i}>
                  <td>
                    <Link to={`/${job.company_name}`}>{job.company_name} </Link>
                  </td>
                  <td>{job.title}</td>
                  <td>{job.category}</td>
                  <td>
                    {format(parseISO(job.publication_date), `dd-LL-yyyy`)}
                  </td>
                  <td>
                    <Button
                      className="ml-5"
                      variant="danger"
                      onClick={() => {
                        dispatch(removeFromFavoritesAction(i));
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                  <td class="expand-button">
                    <MDBBtn onClick={toggleShow}>Description</MDBBtn>
                  </td>
                </tr>
                <tr>
                  <MDBCollapse show={showShow}>
                    {job.description.slice(80, 500)}
                  </MDBCollapse>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Favorites;

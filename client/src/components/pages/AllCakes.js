import React, { useEffect, useState } from "react";
import { useCakeStore } from "../../store/cakeStore";
import Button from "react-bootstrap/Button";
import { Navbar, Nav,Card, Col, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './custom.css';
import DeleteConfirmation from "../shared/DeleteConfirmation";
const AllCakes = () => {
  const allCakes = useCakeStore((state) => state.cakeData);
  const getCakeAPICall = useCakeStore((state) => state.getCakesAPI);
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const deleteAPICall = useCakeStore((state) => state.deleteCakesAPI);
  useEffect(() => {
    if (allCakes.length === 0) {
      getCakeAPICall();
    }
  }, [allCakes]);

  const openDeleteConfirmationModelHandler = (id) => {
    setItemIdToDelete(id);
    setShowModel(true);
  };
  const closeDeleteConfirmationModelHandler = () => {
    setItemIdToDelete(0);
    setShowModel(false);
  };

  const DeleteConfirmHandler = async () => {
    await deleteAPICall(itemIdToDelete);
    setItemIdToDelete(0);
    setShowModel(false);
  };
  React.useEffect(() => {
    // getCakeAPICall();
  }, []);
  return (
    <>
       

      <DeleteConfirmation
        showModal={showModel}
        title="Delete Confirmation"
        body="Are you sure you want to delete this Cake?"
        closeDeleteConfirmationModelHandler={closeDeleteConfirmationModelHandler}
        DeleteConfirmHandler={DeleteConfirmHandler}
      />

      <Container className="mt-2">
        <Row>
          <Col className="col-md-4 offset-md-4">
          <Button
  className="custom-add-button"
  type="button"
  onClick={() => navigate("/add-cake")}
>
  Add
</Button>
          </Col>
        </Row>
        <Row xs={1} md={3} className="g-4">
          {allCakes.map((cake) => (
            <Col key={cake.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={cake.imageUrl}
                  style={{ objectFit: "cover", margin: "auto" }}
                />
                <Card.Body>
                  <Card.Title>{cake.name}</Card.Title>
                  <Card.Text>Price - {cake.price}</Card.Text>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => navigate(`/edit-cake/${cake.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => openDeleteConfirmationModelHandler(cake.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllCakes;

import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCakeById, useCakeStore } from "../../store/cakeStore";
import { Container, Row, Col, Form } from "react-bootstrap";
const EditCake = () => {
  const { id } = useParams();
  const cakeToEdit = useCakeStore(getCakeById(id));
  const name = useRef("");
  const price = useRef("");
  const imageurl = useRef("");
  const updateAPICall = useCakeStore((state) => state.updateCakesAPI);
  const navigate = useNavigate();
  useEffect(() => {
    if (cakeToEdit) {
      name.current.value = cakeToEdit.name;
      price.current.value = cakeToEdit.price;
      imageurl.current.value = cakeToEdit.imageUrl;
    }
  }, [cakeToEdit]);

  const updateHandler = async () => {
    const payload = {
      name: name.current.value,
      price: price.current.value,
      imageUrl: imageurl.current.value,
      id: id,
    };
    await updateAPICall(payload);
    navigate("/");
  };
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Update A Cake</legend>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCost">
              <Form.Label>Cost</Form.Label>
              <Form.Control type="text" ref={price} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImageurl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" ref={imageurl} />
            </Form.Group>
            <button variant="primary" type="button" onClick={updateHandler}>
              Update
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditCake;

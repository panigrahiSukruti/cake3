
import React, { useRef } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCakeStore } from "../../store/cakeStore";

const AddCake = () => {
  const navigate = useNavigate();
  const name = useRef("");
  const price = useRef("");
  const imageurl = useRef("");
  const addCakeApiCall = useCakeStore((state) => state.addCakesAPI);

  const addCakeHand = async (e) => {
    e.preventDefault();
    const payload = {
      name: name.current.value,
      price: price.current.value,
      imageUrl: imageurl.current.value,
    };
    await addCakeApiCall(payload);
    navigate("/");
  };
  

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Create A New Cake</legend>

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
            <button variant="primary" type="button" onClick={addCakeHand}>
              Add
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddCake;

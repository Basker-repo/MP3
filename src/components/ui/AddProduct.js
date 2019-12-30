import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const FormStyles = styled.div`
  .form-title {
    font-size: 16px;
    text-align: center;
    margin: 2em auto;
  }

  form {
    margin-top: 2em;
    .form-control {
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 14px;
      min-height: 46px;
      margin-bottom: 3em;
    }
    input[type="file"] {
      margin-bottom: 3em;
    }
    button {
      width: 159px;
      height: 45px;
      background: transparent linear-gradient(90deg, #009dff 0%, #5cbbf7 100%)
        0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000029;
      border-radius: 23px;
    }
  }
`;

function AddProduct() {
  const handleSubmit = e => {
    let data = {};
    e.preventDefault();
    let elms = e.target.elements;
    let length = elms.length - 1;
    for (let i = 0; i < length; i++) {
      if (elms[i].value) data[elms[i].name] = elms[i].value;
    }
    data = JSON.stringify(data);

    fetch("http://3.92.201.85:8999/product/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: data
    }).then(response => response.ok);
  };

  return (
    <Container as={FormStyles}>
      <Row>
        <Col>
          <h1 className="form-title">Add Product</h1>
        </Col>
      </Row>

      <Form onSubmit={e => handleSubmit(e)}>
        <Row>
          <Col md={4}>
            <Form.Group controlId="formBasicName">
              <Form.Control name="product_name" placeholder="Product name" />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Control as="select" name="product_category">
                <option>Product Category</option>
                <option value="">MACHINE GUN </option>
                <option value="">Pistol</option>
                <option value="">MI6</option>
                <option value="">Ammunition</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Control name="maker" placeholder="Maker" />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Control name="caliber" placeholder="Caliber" />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Control name="bullet_weight" placeholder="Bullet weight" />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Control type="file" name="documents" />
            </Form.Group>
          </Col>

          <Col md={{ span: 8, offset: 2 }}>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows="6"
                name="quick_note"
                placeholder="Enter Quick note"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-5">
          <Col style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default AddProduct;

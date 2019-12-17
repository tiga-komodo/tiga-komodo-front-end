import React, { useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from "reactstrap";
import axios from "axios";
import { BACKEND_URI } from "../../helpers/env";

const HEROKU_API = process.env.REACT_APP_BACKEND_URI;

export default function ProductForm() {
  const [product, setProduct] = useState({
    title: "",
    img: "",
    price: 0,
    company: "",
    info: "",
    inCart: false,
    count: 0,
    total: 0,
    amount: 0
  });

  const handleChange = event => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  };

  const submitProduct = event => {
    event.preventDefault();
    console.log(product);

    axios
      .post(HEROKU_API + "/products", product)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <h1>Welcome Admin</h1>
      {/* add product */}
      <Form onSubmit={submitProduct}>
        <FormGroup row>
          <Label for="title" sm={2}>
            Title
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={product.title}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="img" sm={2}>
            Image
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="img"
              value={product.img}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="price" sm={2}>
            Price
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="company" sm={2}>
            Company
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="company"
              value={product.company}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="info" sm={2}>
            Info
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="info"
              value={product.info}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="count" sm={2}>
            Count
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="count"
              value={product.count}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="total" sm={2}>
            Total
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="total"
              value={product.total}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="amount" sm={2}>
            Amount
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="amount"
              value={product.amount}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button onSubmit={submitProduct}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
}

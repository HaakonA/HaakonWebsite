import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const onSubmit = (firstName, secondName) => {
  console.log(firstName);
  console.log(secondName);
};

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Control
            placeholder="First name..."
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Second name..."
            onChange={(e) => setSecondName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Control placeholder="Email address" />
        </Col>
        <Col>
          <Button onClick={onSubmit(firstName, secondName)}>Submit</Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default Contact;

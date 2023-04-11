import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactsForm.scss";

const ContactsForm = () => {
  return (
    <Form className="form">
      <h4>Napisz do mnie</h4>
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email : </Form.Label>
        <Form.Control type="email" placeholder="podaj swój adres e-mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Twoja wiadomość : </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="wpisz tekst" />
      </Form.Group>
      <Button type="submit">Wyślij</Button>
    </Form>
  );
};

export default ContactsForm;

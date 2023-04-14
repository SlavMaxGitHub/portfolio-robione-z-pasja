import React, { useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactsForm.scss";

const ContactsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ewxnw0r",
        "template_q0k0lix",
        form.current,
        "iv-SoCQyt5JqulQsR"
      )
      .then(
        () => {
          alert("Pomyślnie wysłano wiadomość");
        },
        () => {
          alert("Coś poszło nie tak...");
        }
      );
    e.target.reset();
  };

  return (
    <Form id="myForm" ref={form} onSubmit={sendEmail} className="form">
      <h4 className="form-title">Napisz do mnie</h4>
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Twój e-mail :</Form.Label>
        <Form.Control className="input" type="email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Twoje imię : </Form.Label>
        <Form.Control className="input" type="text" name="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Twoja wiadomość : </Form.Label>
        <Form.Control className="input" name="message" as="textarea" rows={3} />
      </Form.Group>
      <Button className="formButton" type="submit">
        Wyślij
      </Button>
    </Form>
  );
};

export default ContactsForm;

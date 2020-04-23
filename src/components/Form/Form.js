import React from "react";
import { Form as BootstrapForm } from "react-bootstrap";

const Form = ({ emailValue, emailChange, nameValue, nameChange }) => {
  return (
    <BootstrapForm>
      <BootstrapForm.Group controlId="nameField">
        <BootstrapForm.Label>Name</BootstrapForm.Label>
        <BootstrapForm.Control
          value={nameValue}
          type="text"
          placeholder="Enter Name"
          onChange={nameChange}
        />
      </BootstrapForm.Group>
      <BootstrapForm.Group controlId="emailField">
        <BootstrapForm.Label>Email</BootstrapForm.Label>
        <BootstrapForm.Control
          value={emailValue}
          type="email"
          placeholder="Enter Email"
          onChange={emailChange}
        />
      </BootstrapForm.Group>
    </BootstrapForm>
  );
};

export default Form;

import React from "react";
import { Button } from "react-bootstrap";
import Form from "../Form";
import Modal from "./Modal";

const FormModal = ({ clickHandler, item, title, ...other }) => {
  return (
    <Modal
      title={title}
      body={
        <Form
          formID="modalForm"
          item={item}
          submitHandler={(values) => clickHandler({ ...item, ...values })}
        />
      }
      footer={
        <Button variant="success" type="submit" form="modalForm">
          Save
        </Button>
      }
      {...other}
    />
  );
};

export default FormModal;

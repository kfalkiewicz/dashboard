import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "../Form";
import Modal from "./Modal";

const EditModal = ({ item, editHandler, ...other }) => {
  const [email, setEmail] = useState(item?.email);
  const [name, setName] = useState(item?.name);

  return (
    <Modal
      title="Edit"
      body={
        <Form
          emailValue={email}
          emailChange={(e) => setEmail(e.currentTarget.value)}
          nameValue={name}
          nameChange={(e) => setName(e.currentTarget.value)}
        />
      }
      footer={
        <Button
          variant="success"
          onClick={() => editHandler(item.id, name, email)}
        >
          Save
        </Button>
      }
      {...other}
    />
  );
};

export default EditModal;

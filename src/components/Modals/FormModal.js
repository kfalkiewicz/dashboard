import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "../Form";
import Modal from "./Modal";

const FormModal = ({ clickHandler, item, title, ...other }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setEmail(item?.email || "");
    setName(item?.name || "");
  }, [item]);

  return (
    <Modal
      title={title}
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
          onClick={() => clickHandler({ ...item, name, email })}
        >
          Save
        </Button>
      }
      {...other}
    />
  );
};

export default FormModal;

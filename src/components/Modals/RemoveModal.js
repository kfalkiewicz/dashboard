import React from "react";
import { Button } from "react-bootstrap";
import Modal from "./Modal";

const RemoveModal = ({ clickHandler, item, ...other }) => {
  return (
    <Modal
      title="Delete"
      body={`Do you want to remove ${item?.name}?`}
      footer={
        <Button variant="danger" onClick={() => clickHandler(item)}>
          Delete
        </Button>
      }
      {...other}
    />
  );
};

export default RemoveModal;

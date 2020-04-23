import React from "react";
import { Button } from "react-bootstrap";
import Modal from "./Modal";

const RemoveModal = ({ item, removeHandler, ...other }) => {
  return (
    <Modal
      title="Delete"
      body={`Do you want to remove ${item?.name}?`}
      footer={
        <Button variant="danger" onClick={() => removeHandler(item.id)}>
          Delete
        </Button>
      }
      {...other}
    />
  );
};

export default RemoveModal;

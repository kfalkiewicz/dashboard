import React from "react";
import { Button } from "react-bootstrap";

const TableItem = ({ item }) => {
  const {
    id,
    name,
    username,
    email,
    address: { city },
  } = item;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{city}</td>
      <td>
        <Button variant="warning">Edit</Button>
      </td>
      <td>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default TableItem;

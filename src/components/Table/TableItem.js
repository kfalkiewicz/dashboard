import React from "react";
import { Button } from "react-bootstrap";

const TableItem = ({ item, editHandler, removeHandler }) => {
  return (
    <>
      <tr>
        <td>{item?.id ?? "---"}</td>
        <td>{item?.name ?? "---"}</td>
        <td>{item?.username ?? "---"}</td>
        <td>{item?.email ?? "---"}</td>
        <td>{item?.address?.city ?? "---"}</td>
        <td>
          <Button variant="warning" onClick={() => editHandler(item)}>
            Edit
          </Button>
        </td>
        <td>
          <Button variant="danger" onClick={() => removeHandler(item)}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TableItem;

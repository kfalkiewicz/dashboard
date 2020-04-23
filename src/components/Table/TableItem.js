import React, { useState } from "react";
import { Button } from "react-bootstrap";
import EditModal from "../Modals/EditModal";
import RemoveModal from "../Modals/RemoveModal";

const TableItem = ({ item, editHandler, removeHandler }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showRemove, setShowRemove] = useState(false);

  return (
    <>
      {showEdit && (
        <EditModal
          show={showEdit}
          item={item}
          onHide={() => setShowEdit(false)}
          editHandler={editHandler}
        />
      )}
      {showRemove && (
        <RemoveModal
          show={showRemove}
          item={item}
          onHide={() => setShowRemove(false)}
          removeHandler={removeHandler}
        />
      )}
      <tr>
        <td>{item?.id ?? "---"}</td>
        <td>{item?.name ?? "---"}</td>
        <td>{item?.username ?? "---"}</td>
        <td>{item?.email ?? "---"}</td>
        <td>{item?.address?.city ?? "---"}</td>
        <td>
          <Button variant="warning" onClick={() => setShowEdit(true)}>
            Edit
          </Button>
        </td>
        <td>
          <Button variant="danger" onClick={() => setShowRemove(true)}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TableItem;

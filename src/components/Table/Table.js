import React, { useState, useEffect } from "react";
import {
  Alert,
  Badge,
  Spinner,
  Table as BootstrapTable,
} from "react-bootstrap";
import useFetch from "use-http";
import { FormModal, RemoveModal } from "../Modals";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import styles from "./Table.module.css";

const columns = ["ID", "Name", "Username", "Email", "City", "Edit", "Delete"];

// Used custom db.json instead https://jsonplaceholder.typicode.com/users becouse of the POST issues on the second one
const serverAddress =
  "https://my-json-server.typicode.com/kfalkiewicz/dashboard/users";

const Table = (props) => {
  const [users, setUsers] = useState([]);
  const [sortInfo, setSortInfo] = useState({
    sorted: false,
    icon: "⇅",
  });
  const { del, error, get, loading, post, put, response } = useFetch(
    serverAddress
  );
  const [modalData, setModalData] = useState({
    action: "Add",
    item: {},
    handler: () => {},
    show: false,
    type: "form",
  });
  const Modal = {
    form: FormModal,
    remove: RemoveModal,
  }[modalData.type];

  let indicator;
  if (!users.length && loading) {
    indicator = (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  } else if (!users.length && !loading) {
    indicator = <p>No Data!!!</p>;
  }

  useEffect(() => {
    getUsers();
  }, []);

  const getBiggestId = () => Math.max(...users.map((item) => item.id));

  const getUsers = async () => {
    const users = await get();
    if (response.ok) setUsers(users);
  };

  const addUser = async (item) => {
    const newUser = await post("", {
      ...item,
      id: getBiggestId() + 1,
    });
    if (response.ok) setUsers((state) => [...state, newUser]);
  };

  const editUser = async (item) => {
    const { id, name, email } = item;
    const editedUser = await put(`/${id}`, { id, name, email });

    if (response.ok) {
      setUsers(
        users.map((el) => (el.id === id ? { ...el, ...editedUser } : el))
      );
    }
  };

  const removeUser = async (item) => {
    const { id } = item;
    await del(`/${id}`);

    if (response.ok) {
      setUsers((users) => users.filter((el) => el.id !== id));
    }
  };

  const tableItemHandler = (action, handler, item, type) => {
    const clickHandler = (newItem) => {
      handler(newItem);
      setModalData((data) => ({ ...data, show: false }));
    };
    const newData = {
      action,
      handler: clickHandler,
      item,
      show: true,
      type,
    };

    setModalData(newData);
  };

  const sortingMethod = (arr, field, order) => {
    return arr.sort((a, b) =>
      order === "↓"
        ? a[field].localeCompare(b[field])
        : b[field].localeCompare(a[field])
    );
  };

  const sortHandler = () => {
    setSortInfo((sortInfo) => ({
      sorted: true,
      icon: sortInfo.icon === "↓" ? "↑" : "↓",
    }));
    setUsers((users) =>
      sortingMethod(users, "username", sortInfo.icon === "↓" ? "↑" : "↓")
    );
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <TableHeader
        clickHandler={() => tableItemHandler("Add", addUser, {}, "form")}
      />
      {indicator}
      {users.length > 0 && (
        <BootstrapTable striped bordered hover>
          <thead>
            <tr>
              {columns.map((item) => (
                <th key={item}>
                  <span>{item}</span>
                  {item.toLowerCase() === "username" && (
                    <Badge
                      className={styles.sortIcon}
                      variant="secondary"
                      onClick={sortHandler}
                    >
                      {sortInfo.icon}
                    </Badge>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <TableItem
                key={`${item.id}_${item.username}`}
                item={item}
                editHandler={(item) =>
                  tableItemHandler("Edit", editUser, item, "form")
                }
                removeHandler={(item) =>
                  tableItemHandler("Remove", removeUser, item, "remove")
                }
              />
            ))}
          </tbody>
        </BootstrapTable>
      )}
      <Modal
        clickHandler={modalData.handler}
        item={modalData.item}
        onHide={() => setModalData((data) => ({ ...data, show: false }))}
        show={modalData.show}
        title={modalData.action}
      />
    </>
  );
};

export default Table;

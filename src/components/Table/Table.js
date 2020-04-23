import React, { useState, useEffect } from "react";
import { Alert, Spinner, Table as BootstrapTable } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const columns = ["ID", "Name", "Username", "Email", "City", "Edit", "Delete"];

// Used custom db.json instead https://jsonplaceholder.typicode.com/users becouse of the POST issues on the second one
const serverAddress =
  "https://my-json-server.typicode.com/kfalkiewicz/dashboard/users";

const Table = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(serverAddress)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const addUser = (name, email) => {
    fetch(serverAddress, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(
        (result) => {
          setUsers((users) => [...users, result]);
        },
        (error) => {
          setError(error);
        }
      );
  };

  const editUser = (id, name, email) => {
    fetch(`${serverAddress}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        name,
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(
        (result) => {
          setUsers((users) =>
            users.map((el) => (el.id === id ? { ...el, name, email } : el))
          );
        },
        (error) => {
          setError(error);
        }
      );
  };

  const removeUser = (id) => {
    fetch(serverAddress, {
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(
        (result) => {
          setUsers((users) => users.filter((el) => el.id !== id));
        },
        (error) => {
          setError(error);
        }
      );
  };

  return (
    <>
      {error !== null && <Alert variant="danger">{error}</Alert>}
      <TableHeader buttonFunc={addUser} />
      {!isLoaded ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <BootstrapTable striped bordered hover>
          <thead>
            <tr>
              {columns.map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <TableItem
                key={`${item.id}_${item.username}`}
                item={item}
                editHandler={editUser}
                removeHandler={removeUser}
              />
            ))}
          </tbody>
        </BootstrapTable>
      )}
    </>
  );
};

export default Table;

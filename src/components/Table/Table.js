import React, { useState, useEffect } from "react";
import { Alert, Spinner, Table as BootstrapTable } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const columns = ["ID", "Name", "Username", "Email", "City", "Edit", "Delete"];

const Table = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      {error !== null && <Alert variant="danger">{error}</Alert>}
      <TableHeader />
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
              <TableItem item={item} />
            ))}
          </tbody>
        </BootstrapTable>
      )}
    </>
  );
};

export default Table;

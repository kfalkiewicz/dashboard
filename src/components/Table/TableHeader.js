import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./TableHeader.module.css";

const TableHeader = ({ clickHandler }) => {
  return (
    <Row className={styles.tableHeader}>
      <Col>
        <h3>User list</h3>
      </Col>
      <Col sm="auto">
        <Button variant="primary" onClick={clickHandler}>
          Add new
        </Button>
      </Col>
    </Row>
  );
};

export default TableHeader;

import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./TableHeader.module.css";

const TableHeader = () => (
  <Row className={styles.tableHeader}>
    <Col>
      <h3>User list</h3>
    </Col>
    <Col sm="auto">
      <Button variant="primary">Add new</Button>
    </Col>
  </Row>
);

export default TableHeader;

import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Table from "../Table";
import Title from "../Title";
import styles from "./App.module.css";

const App = () => (
  <div className="App">
    <Container className={styles.container}>
      <Row>
        <Col>
          <Title value="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table />
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;

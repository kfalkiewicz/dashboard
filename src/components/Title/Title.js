import React from "react";
import styles from "./Title.module.css";

const Title = ({ value }) => <h1 className={styles.title}>{value}</h1>;
export default Title;

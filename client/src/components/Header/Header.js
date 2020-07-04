import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <span className={styles.covid}>COVID-19</span>
    </header>
  );
}

export default Header;

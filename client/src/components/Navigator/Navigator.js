import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigator.module.css";

function Navigator(props) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link className={styles.link} to="/">
            Slovensko
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/svet">
            Svet
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/admin">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigator;

import React, { useState } from "react";
import styles from "./Heslo.module.css";
import axios from "axios";

function Heslo({ setToken }) {
  const [heslo, setHeslo] = useState("");
  const [error, setError] = useState("");

  function onSend(e) {
    axios
      .post("http://localhost:5000/change-data", { heslo: heslo })
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        setToken(token);
      })
      .catch(err => {
        console.log(err);
        setHeslo("");
        setError("Nesprávne heslo!");
      });
  }

  return (
    <div className={styles.heslo}>
      <label htmlFor="heslo">
        Heslo:{" "}
        <input
          type="text"
          id="heslo"
          value={heslo}
          onChange={e => {
            setHeslo(e.target.value);
          }}
        />
      </label>{" "}
      <button type="button" onClick={onSend}>
        Potvrď
      </button>
      <h2 style={{ color: "red" }}>{error}</h2>
    </div>
  );
}

export default Heslo;

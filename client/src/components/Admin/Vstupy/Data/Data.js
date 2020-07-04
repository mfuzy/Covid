import React, { useState, useEffect } from "react";
import styles from "./Data.module.css";
import axios from "axios";

function Data({ setStatus, status }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-data")
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [status]);

  if (data.length === 0) return <p>LOADING...</p>;
  else {
    return (
      <div className={styles.data}>
        <h2>Dáta:</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Dátum</th>
              <th>Testy</th>
              <th>Pozitívni</th>
              <th>Vyliečení</th>
              <th>Úmrtia</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, k) => (
              <tr key={k}>
                <td>{new Date(i.datum).toLocaleDateString()}</td>
                <td>{i.testy}</td>
                <td>{i.pozitivni}</td>
                <td>{i.vylieceni}</td>
                <td>{i.umrtia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Data;

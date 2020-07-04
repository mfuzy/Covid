import React, { useState } from "react";
import "./Delete.css";
import axios from "axios";

function Delete({ setStatus, token }) {
  const [ktoryDen, setKtoryden] = useState("");

  function onDelete(e) {
    axios
      .delete(`http://localhost:5000/change-data/delete/${ktoryDen}`, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(res => {
        setStatus({ type: "success", message: res.data.message });
      })
      .catch(err => {
        console.log(err.message);
        setStatus({ type: "error", message: err.message });
      });
  }

  return (
    <div className="vstup">
      <h2>Vymaž deň:</h2>
      <label htmlFor="ktoryDen2">
        Ktorý deň vymazať?{" "}
        <input
          type="date"
          id="ktoryDen2"
          value={ktoryDen}
          onChange={e => {
            setKtoryden(e.target.value);
          }}
        />
      </label>{" "}
      <button type="button" onClick={onDelete}>
        Vymaž
      </button>
    </div>
  );
}

export default Delete;

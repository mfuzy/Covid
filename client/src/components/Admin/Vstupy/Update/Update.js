import React, { useState } from "react";
import "./Update.css";
import axios from "axios";

function Update({ setStatus, token }) {
  const [ktoryDen, setKtoryden] = useState("");
  const [datum, setDatum] = useState("");
  const [testy, setTesty] = useState("");
  const [pozitivni, setPozitivni] = useState("");
  const [vylieceni, setVylieceni] = useState("");
  const [umrtia, setUmrtia] = useState("");

  function onUpdate(e) {
    const dataToSend = {
      datum: datum,
      testy: testy,
      pozitivni: pozitivni,
      vylieceni: vylieceni,
      umrtia: umrtia
    };

    axios
      .patch(
        `http://localhost:5000/change-data/update/${ktoryDen}`,
        dataToSend,
        {
          headers: { Authorization: "Bearer " + token }
        }
      )
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
      <h2>Uprav denné dáta:</h2>
      <label htmlFor="ktoryDen">
        Ktorý deň upraviť?{" "}
        <input
          type="date"
          id="ktoryDen"
          value={ktoryDen}
          onChange={e => {
            setKtoryden(e.target.value);
          }}
        />
      </label>
      <br />
      <br />
      <label htmlFor="datum2">
        Dátum:{" "}
        <input
          type="date"
          id="datum2"
          value={datum}
          onChange={e => {
            setDatum(e.target.value);
          }}
        />
      </label>{" "}
      <label htmlFor="testy2">
        Testy:{" "}
        <input
          type="number"
          id="testy2"
          value={testy}
          onChange={e => {
            setTesty(e.target.value);
          }}
        />
      </label>{" "}
      <label htmlFor="pozitivni2">
        Pozitívni:{" "}
        <input
          type="number"
          id="pozitivni2"
          value={pozitivni}
          onChange={e => {
            setPozitivni(e.target.value);
          }}
        />
      </label>{" "}
      <label htmlFor="vylieceni2">
        Vyliečení:{" "}
        <input
          type="number"
          id="vylieceni2"
          value={vylieceni}
          onChange={e => {
            setVylieceni(e.target.value);
          }}
        />
      </label>{" "}
      <label htmlFor="umrtia2">
        Úmrtia:{" "}
        <input
          type="number"
          id="umrtia2"
          value={umrtia}
          onChange={e => {
            setUmrtia(e.target.value);
          }}
        />
      </label>{" "}
      <button type="button" onClick={onUpdate}>
        Uprav
      </button>
    </div>
  );
}

export default Update;

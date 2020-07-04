import React, { useState } from "react";
import "./Create.css";
import axios from "axios";

function Create({ setStatus, token }) {
  const [datum, setDatum] = useState("");
  const [testy, setTesty] = useState("");
  const [pozitivni, setPozitivni] = useState(0);
  const [vylieceni, setVylieceni] = useState(0);
  const [umrtia, setUmrtia] = useState(0);

  function onCreate(e) {
    const dataToSend = {
      datum: datum,
      testy: testy,
      pozitivni: pozitivni,
      vylieceni: vylieceni,
      umrtia: umrtia
    };

    axios
      .post("http://localhost:5000/change-data/create", dataToSend, {
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
      <h2>Vytvor denné dáta:</h2>
      <label htmlFor="datum">
        Dátum:{" "}
        <input
          type="date"
          id="datum"
          value={datum}
          onChange={e => {
            setDatum(e.target.value);
          }}
        />
      </label>{" "}
      <label htmlFor="testy">
        Testy:{" "}
        <input
          type="number"
          id="testy"
          value={testy}
          onChange={e => {
            setTesty(e.target.value);
          }}
        />
      </label>{" "}
      <label htmlFor="pozitivni">
        Pozitívni:{" "}
        <input
          type="number"
          id="pozitivni"
          value={pozitivni}
          onChange={e => {
            setPozitivni(e.target.value);
          }}
        />
      </label>{" "}
      <label htmlFor="vylieceni">
        Vyliečení:{" "}
        <input
          type="number"
          id="vylieceni"
          value={vylieceni}
          onChange={e => {
            setVylieceni(e.target.value);
          }}
        />
      </label>{" "}
      <label htmlFor="umrtia">
        Úmrtia:{" "}
        <input
          type="number"
          id="umrtia"
          value={umrtia}
          onChange={e => {
            setUmrtia(e.target.value);
          }}
        />
      </label>{" "}
      <button type="button" onClick={onCreate}>
        Vytvor
      </button>
    </div>
  );
}

export default Create;

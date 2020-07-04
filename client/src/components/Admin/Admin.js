import React, { useState, useEffect } from "react";
import "./Admin.css";
import Heslo from "./Heslo/Heslo";
import Vstupy from "./Vstupy/Vstupy";

function Admin(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storageToken = localStorage.getItem("token");
    if (storageToken) {
      setToken(storageToken);
    }
  }, []);

  return (
    <React.Fragment>
      {token ? (
        <Vstupy setToken={setToken} token={token} />
      ) : (
        <Heslo setToken={setToken} />
      )}
    </React.Fragment>
  );
}

export default Admin;

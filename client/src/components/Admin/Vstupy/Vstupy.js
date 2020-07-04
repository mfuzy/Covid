import React, { useState, useEffect } from "react";
import styles from "./Vstupy.module.css";
import Data from "./Data/Data";
import Create from "./Create/Create";
import Update from "./Update/Update";
import Delete from "./Delete/Delete";
import cn from "classnames";

function Vstupy({ setToken, token }) {
  const [status, setStatus] = useState({ type: "waiting" });

  useEffect(
    () => () => {
      localStorage.removeItem("token");
      console.log("Vstupy unmount");
    },
    []
  );

  function onLogout(e) {
    setToken(null);
  }

  const classnames = cn(styles.status, {
    [styles.statuswait]: status.type === "waiting",
    [styles.statusok]: status.type === "success",
    [styles.statuserr]: status.type === "error"
  });

  return (
    <div>
      <div className={styles.logout}>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>

      <Create token={token} setStatus={setStatus} />
      <br />
      <hr />

      <Update token={token} setStatus={setStatus} />
      <br />
      <hr />
      <Delete token={token} setStatus={setStatus} />
      <br />
      <hr />
      <div className={classnames}>Status: {status.message}</div>
      <Data setStatus={setStatus} status={status} />
    </div>
  );
}

export default Vstupy;

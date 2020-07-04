import React from "react";
import styles from "./Card.module.css";
import CountUp from "react-countup"; //npm install react-countup
import cn from "classnames";

function Card({ trieda, nazov, hodnota, datum }) {
  const classnames = cn(styles.card, styles[trieda]);
  return (
    <div className={classnames}>
      <h3>{nazov}</h3>
      {Number.isInteger(hodnota) ? (
        <h3>
          <CountUp stat={0} end={hodnota} duration={2.5} separator=" " />
        </h3>
      ) : (
        <h3>
          <CountUp
            stat={0}
            end={hodnota}
            duration={2.5}
            decimals={1}
            decimal=","
          />{" "}
          %
        </h3>
      )}

      <p>Dátum poslednej aktualizácie: {datum}</p>
    </div>
  );
}

export default Card;

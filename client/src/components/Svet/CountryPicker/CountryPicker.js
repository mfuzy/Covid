import React from "react";
import styles from "./CountryPicker.module.css";

function CountryPicker({ countries, selectedCountry, onSelect }) {
  return (
    <div>
      <select
        className={styles.select}
        value={selectedCountry}
        onChange={onSelect}
      >
        {countries.map((i, k) => (
          <option key={k} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountryPicker;

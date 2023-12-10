import { useState } from "react";
import styles from "./../filterItem.module.css";

function TimeOpt() {
  const [val, setVal] = useState("");
  const optOnClick = (e: any) => {
    console.log(e.target.textContent);
    setVal(val);
  };

  return (
    <div className="option-container">
      <ul id="driver-list" className={`${styles.optionList}`}>
        <li className={`${styles.option}`} onClick={optOnClick}>
          <p>10:00</p>
        </li>
        <li className={`${styles.option} `} onClick={optOnClick}>
          <p>11:00</p>
        </li>
        <li className={`${styles.option} `} onClick={optOnClick}>
          <p>12:00</p>
        </li>
        <li className={`${styles.option} `} onClick={optOnClick}>
          <p>13:00</p>
        </li>
        <li className={`${styles.option} `} onClick={optOnClick}>
          <p>14:00</p>
        </li>
      </ul>
    </div>
  );
}

export default TimeOpt;

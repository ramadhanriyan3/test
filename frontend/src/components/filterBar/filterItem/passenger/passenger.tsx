import { Image } from "react-bootstrap";
import styles from "./../filterItem.module.css";

interface PassengerProps {
  passengerValue: any;
  handlerPassanger: any;
}

function Passenger({ passengerValue, handlerPassanger }: PassengerProps) {
  return (
    <div className={`${styles.inputTitle}`}>
      <p className="mb-1">Jumlah Penumpang (optional)</p>
      <div id="driver-type" className={`${styles.inputBox} m-0`}>
        {/* <p className={`${styles.inputContent} m-0`} id="selected-driver">
          Jumlah Penumpang
        </p> */}
        <input
          type="number"
          className={`${styles.passenger} border-0 p-0 no-focus-outline `}
          placeholder="Jumlah Penumpang"
          value={passengerValue}
          onChange={handlerPassanger}
        />
        <Image src="/fi_passenger.svg" alt="" id="arrowIcon" />
      </div>
    </div>
  );
}

export default Passenger;

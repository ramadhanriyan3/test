import styles from "./../filterItem.module.css";

import React from "react";
import Select from "react-select";

const options = [
  { value: "08:00", label: "08:00 WIB" },
  { value: "09:00", label: "09:00 WIB" },
  { value: "10:00", label: "10:00 WIB" },
  { value: "11:00", label: "11:00 WIB" },
  { value: "12:00", label: "12:00 WIB" },
  { value: "13:00", label: "13:00 WIB" },
  { value: "14:00", label: "14:00 WIB" },
  { value: "15:00", label: "15:00 WIB" },
];

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderColor: state.isFocused ? "green" : provided.borderColor,
    boxShadow: state.isFocused ? "0 0 0 1px green" : provided.boxShadow,
    "&:hover": {
      borderColor: state.isFocused ? "green" : provided.borderColor,
    },
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    fontFamily: "Helvetica",
    color: "black",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "18px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#c9e7ca" : "#fff",
    fontFamily: "Helvetica",
    color: "black",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "18px",
  }),
};

interface TimeProps {
  selectedOption: any;
  timeChange: any;
}

const Time = ({ selectedOption, timeChange }: TimeProps) => {
  return (
    <div className={`${styles.inputTitle}`}>
      <p className="mb-1">Waktu Jemput/Ambil</p>
      <Select
        options={options}
        styles={customStyles}
        value={selectedOption}
        onChange={timeChange}
      />
    </div>
  );
};

export default Time;

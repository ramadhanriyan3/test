// import { Image } from "react-bootstrap";
import styles from "./../filterItem.module.css";
import React from "react";
import Select from "react-select";

const options = [
  { value: "dengan sopir", label: "Dengan Sopir" },
  { value: "tanpa sopir (lepas kunci)", label: "Tanpa Sopir (Lepas kunci)" },
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
  dropdownIndicator: (provided: any, { selectProps }: any) => ({
    ...provided,
    padding: "8px",
    transition: "all 0.5s",
    transform: selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),
};

interface DriverProps {
  selectedOption: any;
  driverChange: any;
}

const DriverType = ({ selectedOption, driverChange }: DriverProps) => {
  return (
    <div className={`${styles.inputTitle}`}>
      <p className="mb-1">Tipe Driver</p>
      <Select
        options={options}
        styles={customStyles}
        value={selectedOption}
        onChange={driverChange}
      />
    </div>
  );
};

export default DriverType;

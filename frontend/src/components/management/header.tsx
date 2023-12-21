"use client";
import { Image } from "react-bootstrap";
import styles from "./../../app/(management)/cms.module.css";
import BasicButton from "./basicbutton";

function Header() {
  return (
    <>
      <div
        data-testid="header"
        className="d-flex justify-content-between align-items-center"
        style={{
          width: "1370px",
          height: "70px",
          background: "white",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
          border: "0px solid",
        }}
      >
        <div>
          <Image
            src="/Rectangle_63.png"
            alt="home"
            className="my-3 mx-auto ps-3"
            style={{
              width: "100px",
              height: "34px",
            }}
          />
        </div>
        <div className="d-flex">
          <div
            style={{
              border: "1px",
              borderColor: "#8A8A8A",
            }}
          >
            <form action="" className="">
              <Image src="/fi_search.png" className="mx-1" alt="" />
              <input
                type="text"
                placeholder="Search"
                className={`${styles.searchInput} mx-1`}
              />
              <BasicButton label={"Search"} handlerOnClick={() => {}} />
            </form>
          </div>
          <div className="d-flex align-items-center mx-3">
            <Image src="" alt="ava" />
            <p className="px-2 m-0">User Name</p>
            <Image src="/fi_chevron-down.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

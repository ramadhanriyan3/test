"use client";
import Modal from "react-bootstrap/Modal";
import BasicButton from "../basicbutton";
import CmsButton from "../buttonImg";
import { css, cx } from "@emotion/css";
import Image from "next/image";
import axios from "axios";
import { ButtonTypeContext } from "@/components/buttonTypeContext";
import { useContext } from "react";

const modalContainer = css`
  display: flex;
  width: 387px;
  padding: 24px 32px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

function DeleteModal(props: any) {
  const buttonType = useContext(ButtonTypeContext);
  const handlerDelete = async () => {
    const deletecar = await axios.delete(
      `http://localhost:2700/cars/${props.paramId}/delete`
    );
    props.onHide();
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <div className={cx(modalContainer, "mx-auto")}>
        <div>
          <Image src="/img-BeepBeep.png" width={153} height={121} alt="" />
        </div>
        <div>
          <h4 className="title-bold text-center">Menghapus Data Mobil</h4>
          <p className="body-light text-center">
            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
            menghapus?
          </p>
        </div>
        <div className="d-flex justify-content-center gap-3 align-items-center ">
          <CmsButton
            type="button"
            handlerOnClick={handlerDelete}
            label="Ya"
            style={true}
            imagePath=""
          />
          <BasicButton label="Tidak" handlerOnClick={props.onHide} />
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;

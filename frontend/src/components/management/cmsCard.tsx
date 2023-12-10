import { Image } from "react-bootstrap";
import { css, cx } from "@emotion/css";
import CmsButton from "./buttonImg";
import { useState } from "react";
import DeleteModal from "./modals/modal";
import { useRouter } from "next/navigation";
// import styles from "./../../app/(management)/cms.module.css";

const cardsImage = css`
  width: 270px;
  height: 160px;
  flex-shrink: 0;
  margin: 31px 0 31px 0;
  justify-content: center;
`;

const priceStyle = css`
  color: var(--neutral-01, #000);
  font-family: Helvetica;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

interface CmsCardProps {
  model: string;
  capacity: number;
  price: number;
  transmission: string;
  year: number;
  imagePath: string;
  id: string;
}

function CmsCard({
  id,
  model,
  capacity,
  price,
  transmission,
  year,
  imagePath,
}: CmsCardProps) {
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();
  const [paramsId, setParamsId] = useState("1");
  const handlerEdit = (e: any) => {
    router.push("/dashboard/create");
  };
  return (
    <div className="card d-flex justify-content-center column-gap-3 p-4">
      <Image
        src={`/${imagePath.split("/").pop()}`}
        className={cx(cardsImage, "mx-auto")}
        alt="..."
      />
      <div className="card-body p-0 d-flex flex-column">
        <p className="body-regular m-0 pb-1">{model}</p>
        <p className={cx(priceStyle, "price m-0 pb-1")}>Rp. {price}/day</p>
        <p className="body-light m-0 pb-3">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="d-flex mb-3">
          <Image src="/fi_passenger.svg" alt="" />
          <p className="body-light m-0 ps-2">{capacity}</p>
        </div>
        <div className="d-flex mb-3">
          <Image src="/fi_setting.svg" alt="" />
          <p className="body-light m-0 ps-2">{transmission}</p>
        </div>
        <div className="d-flex mb-4">
          <Image src="/fi_calendar.svg" alt="" />
          <p className="body-light m-0 ps-2">{year}</p>
        </div>
        <div className=" d-flex justify-content-around">
          <CmsButton
            imagePath="/fi_trash-2.png"
            label={"Delete"}
            handlerOnClick={() => setModalShow(true)}
            style={false}
            type="button"
          />
          <CmsButton
            imagePath="/fi_edit.png"
            label={`Edit`}
            handlerOnClick={() => {
              router.push(`/dashboard/${id}`);
            }}
            style={true}
            type="button"
          />
        </div>
        <DeleteModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          paramId={id}
        />
      </div>
    </div>
  );
}

export default CmsCard;

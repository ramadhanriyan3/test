import { css, cx } from "@emotion/css";
import { Image } from "react-bootstrap";
import styles from "./card.module.css";

const cardStyle = css`
  width: 270px !important;
  height: 198px !important;
  display: flex;
  padding: 24px;
  background-color: red;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid var(--neutral02);
`;

interface WhyCardprops {
  imgPath: string;
  val1: string;
  val2: string;
}

function WhyCard({ imgPath, val1, val2 }: WhyCardprops) {
  return (
    <div className={`${styles.whyCard} p-4`}>
      <Image className="card-image" src={imgPath} alt="icon" />
      <p className="title-bold m-0">{val1}</p>
      <p className="body-light m-0">{val2}</p>
    </div>
  );
}

export default WhyCard;

"use client";
import { css, cx } from "@emotion/css";
import { useRouter } from "next/navigation";
import { Image } from "react-bootstrap";

interface StepBarBrops {
  lastStep: string;
}

const stepStyle = css`
  color: var(--neutral-01, #000);
  font-family: Helvetica;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  cursor: pointer;
`;

const lastStepStyle = css`
  color: #222;
  cursor: pointer;
  /* Text S/Light */
  font-family: Rubik;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px; /* 150% */
`;

export default function BreadCrumb({ lastStep }: StepBarBrops) {
  const router = useRouter();
  if (!lastStep) {
    return (
      <>
        <div className="d-flex align-items-center">
          <p className={cx(stepStyle, "py-2 my-2")}>Cars</p>
          <Image
            src="/chevron-right.png"
            width={16}
            height={16}
            className="my-2 mx-2"
            alt=""
          />
          <p className={cx(lastStepStyle, "py-2 my-2")}>Car List</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="d-flex align-items-center">
        <p className={cx(stepStyle, "py-2 my-2")}>Cars</p>
        <Image
          src="/chevron-right.png"
          width={16}
          height={16}
          className="my-2 mx-2"
          alt=""
        />
        <p
          className={cx(stepStyle, "py-2 my-2")}
          onClick={() => router.push("/dashboard")}
        >
          Cars List
        </p>
        <Image
          src="/chevron-right.png"
          width={16}
          height={16}
          className="my-2 mx-2"
          alt=""
        />
        <p className={cx(lastStepStyle, "py-2 my-2")}>{lastStep}</p>
      </div>
    </>
  );
}

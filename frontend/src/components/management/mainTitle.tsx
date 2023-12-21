"use client";
import CmsButton from "./buttonImg";
import { css, cx } from "@emotion/css";
import { useRouter } from "next/navigation";

const tiltleStyle = css`
  color: var(--neutral-01, #000);

  /* Heading/20/Bold */
  font-family: Helvetica;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
`;

export default function CmsTitle() {
  const router = useRouter();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className={cx(tiltleStyle)}>CARS</div>
        <CmsButton
          type="button"
          label={"New Item"}
          handlerOnClick={() => {
            router.push("/dashboard/create");
          }}
          imagePath="/fi_plus.png"
          style={true}
        />
      </div>
    </>
  );
}

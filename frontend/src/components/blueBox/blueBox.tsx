"use client";

import { Container } from "react-bootstrap";
import MyButton from "../button/button";
import { css, cx } from "@emotion/css";
import { useRouter } from "next/navigation";

const blueHead = css`
  color: var(--neutral01);
  border-radius: 13px;
  background: var(--primary-dark-blue-04, #0d28a6);
  width: 100%;
  height: 326px;
`;

function BlueBox() {
  const router = useRouter();
  return (
    <Container className="mt-100">
      <div
        className={cx(
          blueHead,
          "text-center d-flex flex-column align-items-center justify-content-center h-100 pb-5"
        )}
      >
        <h3 className="big-header mb-3 mt-64">
          Sewa Mobil di (Lokasimu) Sekarang
        </h3>
        <p className="body-light mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <MyButton
          value={"Mulai Sewa Mobil"}
          handlerOnClick={() => router.push("/cars")}
        />
      </div>
    </Container>
  );
}

export default BlueBox;

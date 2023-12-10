import { Image } from "react-bootstrap";
import { css, cx } from "@emotion/css";

const widthCard = css`
  max-width: 619px;
`;
const widthCardBody = css`
  max-width: 415px;
`;
interface TestiCardPropss {
  imgSrc: string;
}

export default function TestiCard({ imgSrc }: TestiCardPropss) {
  return (
    <div className={cx(widthCard, "card testi-card  p-4")}>
      <div className="row g-0 justify-content-evenly align-items-center">
        <div className="col-lg-2 text-center">
          <Image src={imgSrc} className="Image-fluid rounded-start" alt="..." />
        </div>
        <div className={cx(widthCard, "col-lg-10")}>
          <div className="card-body px-lg-0 px-3 py-0">
            <div className="text-center text-lg-start py-lg-0 py-3">
              <Image src="/Rate.png" className="" alt="" />
            </div>
            <div>
              <p className="card-text body-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus neque sapiente esse, magnam omnis earum
                blanditiis assumenda officia sunt amet eius, est quod doloribus
                minus saepe obcaecati temporibus nulla itaque.
              </p>
              <p className="card-text body-regular">John doe, 35</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

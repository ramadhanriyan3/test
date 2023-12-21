import { Container } from "react-bootstrap";
import BasicButton from "../basicbutton";
import { css, cx } from "@emotion/css";
import styles from "./../../../app/(management)/cms.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";

const tiltleStyle = css`
  color: var(--neutral-01, #000);

  /* Heading/20/Bold */
  font-family: Helvetica;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
`;

const withBackground = css`
  display: inline-flex;
  padding: 8px 12px;
  align-items: center;
  gap: 12px;
  color: white;
  border-radius: 2px;
  border: 0;
  background: var(--primary-dark-blue-04, #0d28a6);
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
  &:active {
    transform: scale(1);
    transition: all 0.3s ease;
  }
`;

const addition = css`
  color: var(--neutral-03, #8a8a8a);
  font-family: Rubik;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 14px;
`;

interface FormPageProps {
  method: string;
  apiAction: string;
}
export default function FormPage({ method, apiAction }: FormPageProps) {
  const router = useRouter();
  const handlerSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const formData = {
        model: e.target.car_name.value,
        rentPerDay: e.target.price.value,
        picture: e.target.picture.files[0],
      };
      console.log({ formData });
      if (method === "post") {
        const response = await axios.post(apiAction, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("login success", response.data);
        router.push("/dashboard");
      }
      if (method === "patch") {
        const response = await axios.patch(apiAction, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("login success", response.data);
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.log("loginerror", error.response || error);
      router.push("/dashboard");
    }
  };
  return (
    <Container data-testid="form" fluid className="p-0">
      <div className={cx(tiltleStyle, "mb-3")}>Add New Cars</div>
      <div
        style={{ background: "white" }}
        className=" p-3 d-flex flex-direction-column column-gap-3"
      >
        <form onSubmit={handlerSubmit} encType="multipart/form-data">
          <div className="d-flex my-2 align-items-center">
            <label htmlFor="" className={`${styles.label}`}>
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="car_name"
              className={`${styles.inputField}`}
            />
          </div>
          <div className="d-flex my-2 align-items-center">
            <label htmlFor="" className={`${styles.label}`}>
              Harga <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="price"
              className={`${styles.inputField}`}
            />
          </div>
          <div className="my-2 ">
            <div className="d-flex align-items-center ">
              <label htmlFor="" className={`${styles.label}`}>
                Foto <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="file"
                name="picture"
                className={`${styles.inputField}`}
                accept="image/png, image/jpeg"
              />
            </div>
            <p className={cx(addition, "text-end")}>File size max 2MB</p>
          </div>
          <div className="d-flex my-2 align-items-center">
            <label htmlFor="" className={`${styles.label}`}>
              Start Rent
            </label>
            <p>-</p>
          </div>
          <div className="d-flex my-2 align-items-center">
            <label htmlFor="" className={`${styles.label}`}>
              Finish Rent
            </label>
            <p>-</p>
          </div>
          <div className="d-flex my-2 align-items-center">
            <label htmlFor="" className={`${styles.label}`}>
              Created At
            </label>
            <p>-</p>
          </div>
          <div className="d-flex my-2 align-items-center">
            <label htmlFor="" className={`${styles.label}`}>
              Updated At
            </label>
            <p>-</p>
          </div>
          <div className="d-flex my-2 align-items-center gap-3">
            <BasicButton
              label=" Cancel"
              handlerOnClick={() => {
                router.push("/dashboard");
              }}
            />
            <button type="submit" className={cx(withBackground)}>
              Save
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

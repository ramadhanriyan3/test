import { css, cx } from "@emotion/css";
import { Image } from "react-bootstrap";

const noBackground = css`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: white;
  border-radius: 2px;
  border: 1px red solid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  color: red;
  font-family: Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
  &:active {
    transform: scale(1);
    transition: all 0.3s ease;
  }
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

interface CmsButtonProps {
  style: boolean;
  label: string;
  handlerOnClick: any;
  imagePath: string;
  type: "button" | "submit" | "reset" | undefined;
}
export default function CmsButton({
  style,
  handlerOnClick,
  label,
  imagePath = "",
  type,
}: CmsButtonProps) {
  if (imagePath) {
    return (
      <>
        <button
          type={type}
          onClick={handlerOnClick}
          className={style ? cx(withBackground) : cx(noBackground)}
        >
          <Image src={imagePath} /> {label}
        </button>
      </>
    );
  }
  return (
    <>
      <button
        type={type}
        onClick={handlerOnClick}
        className={style ? cx(withBackground) : cx(noBackground)}
      >
        {label}
      </button>
    </>
  );
}

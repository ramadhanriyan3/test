import { Image } from "react-bootstrap";

interface MenuProps {
  imgPath: string;
  title: string;
}
function MenuItem({ imgPath, title }: MenuProps) {
  return (
    <div
      className="d-flex flex-column align-items-center mb-3 p-3 "
      style={{
        cursor: "pointer",
      }}
    >
      <Image src={imgPath} width={24} height={24} alt="home" />
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 12,
          fontFamily: "Helvetica",
          fontWeight: "700",
        }}
      >
        {title}
      </div>
    </div>
  );
}

export default MenuItem;

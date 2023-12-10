import MenuItem from "./menuItem";
import Image from "next/image";

function MainMenu() {
  return (
    <div
      style={{ backgroundColor: "blue", width: "70px", height: "902px" }}
      className=" d-flex direction flex-column align-item-center"
    >
      <Image
        src="/Rectangle_63.png"
        width={34}
        height={34}
        alt="home"
        className="my-3 mx-auto"
      />
      <MenuItem imgPath="/fi_home.svg" title="dashboard" />
      <MenuItem imgPath="/fi_truck.svg" title="cars" />
    </div>
  );
}

export default MainMenu;

import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import BlueBox from "./blueBox";
import { useRouter } from "next/navigation";
import MyButton from "../button/button";

jest.mock("next/navigation");

describe("BlueBox test", () => {
  it("should render a blueBox", () => {
    const router = useRouter();
    render(
      <BlueBox>
        <MyButton value={"Mulai Sewa Mobil"} handlerOnClick={() => {}} />
      </BlueBox>
    );

    const blueBox = screen.getByTestId("blueBox");
    expect(blueBox).toBeInTheDocument();
  });
});

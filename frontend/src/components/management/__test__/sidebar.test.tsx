import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import SideBar from "../sideBar";

describe("Sidebar test", () => {
  it("should render a sidebar correctly", () => {
    render(<SideBar />);
    const sideBar = screen.getByText("CARS");
    expect(sideBar).toBeInTheDocument();
  });
});

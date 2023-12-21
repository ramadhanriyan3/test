import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MainMenu from "../mainMenu";

describe("Main menu test", () => {
  it("should render a main Menu component", () => {
    render(<MainMenu />);
    const mainMenu = screen.getByTestId("mainMenu");
    expect(mainMenu).toBeInTheDocument();
  });
});

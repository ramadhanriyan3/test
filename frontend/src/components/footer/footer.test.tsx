import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Footer from "./footer";

describe("Footer Test", () => {
  it("should render a Footer", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});

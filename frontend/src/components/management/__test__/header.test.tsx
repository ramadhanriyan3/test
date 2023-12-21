import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../header";

describe("Header test", () => {
  it("should render a Header component", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});

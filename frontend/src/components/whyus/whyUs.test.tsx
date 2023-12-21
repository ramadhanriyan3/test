import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WhyUs from "./whyUs";
describe("WhyUs testing", () => {
  it("should return a WhyUs component ", () => {
    render(<WhyUs />);
    const whyUs = screen.getByTestId("whyUs");
    expect(whyUs).toBeInTheDocument();
  });
});

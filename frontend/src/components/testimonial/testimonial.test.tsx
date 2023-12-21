import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Testimonial from "./testimonial";
describe("Testimonial testing", () => {
  it("should return a testimonial component ", () => {
    render(<Testimonial />);
    const testi = screen.getByTestId("testimonial");
    expect(testi).toBeInTheDocument();
  });
});

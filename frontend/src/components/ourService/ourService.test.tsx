import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import OurService from "./service";
describe("navbar testing", () => {
  //   jest.mock("next/link");
  it("should return a OurServices component ", () => {
    render(<OurService />);
    const navbar = screen.getByTestId("ourService");
    expect(navbar).toBeInTheDocument();
  });
});

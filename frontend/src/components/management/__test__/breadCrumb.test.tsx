import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BreadCrumb from "../breadCrumb";

jest.mock("next/navigation");
describe("Bread crumb", () => {
  it("should render a BreadCrumb component with 2 step", () => {
    render(<BreadCrumb lastStep="" />);
    const breadCrumb = screen.getByText("Cars");
    expect(breadCrumb).toBeInTheDocument();
  });

  it("should render a BreadCrumb component with 3 step", () => {
    render(<BreadCrumb lastStep="create item" />);
    const breadCrumb = screen.getByText("Cars List");
    expect(breadCrumb).toBeInTheDocument();
  });
});

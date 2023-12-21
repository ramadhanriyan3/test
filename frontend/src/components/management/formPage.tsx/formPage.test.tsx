import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormPage from "./formPage";
import axios from "axios";

jest.mock("next/navigation");
describe("Form page tes", () => {
  it("should render formPage component", () => {
    render(<FormPage method="post" apiAction="localost:3000/create" />);
    const formPage = screen.getByTestId("form");
    expect(formPage).toBeInTheDocument();
  });
});

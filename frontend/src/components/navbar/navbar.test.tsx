import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import MyNavbar from "./myNavbar";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import MyButton from "../button/button";

window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));

describe("navbar testing", () => {
  jest.mock("next/link");

  it("should return a navbar ", () => {
    render(
      <MyNavbar>
        <MyButton value="Register" handlerOnClick={() => {}} />
      </MyNavbar>,
      { wrapper: MemoryRouterProvider }
    );
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });
});

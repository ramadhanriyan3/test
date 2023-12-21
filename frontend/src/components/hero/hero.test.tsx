import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "./hero";
import MyButton from "../button/button";

describe("Hero test", () => {
  it("should render a Hero", () => {
    render(
      <Hero>
        <MyButton value="Mulai Sewa Mobil" handlerOnClick={() => {}} />
      </Hero>
    );
    const hero = screen.getByTestId("hero");
    expect(hero).toBeInTheDocument();
  });
});

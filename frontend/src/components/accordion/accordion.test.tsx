import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FaqAccordion from "./accordion";

describe(" accordion test", () => {
  it("should render a Accordion", () => {
    render(<FaqAccordion />);
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toBeInTheDocument();
  });
});

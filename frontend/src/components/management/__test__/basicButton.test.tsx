import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import BasicButton from "../basicbutton";

describe("Basic button test", () => {
  it("should render a button", () => {
    render(<BasicButton label="label" handlerOnClick={() => {}} />);
    const basicButton = screen.getByRole("button");
    expect(basicButton).toBeInTheDocument();
  });

  it("Button can be clicked", () => {
    const mockButton = jest.fn();
    render(<BasicButton label="label" handlerOnClick={mockButton} />);
    const basicButton = screen.getByTestId("basicButton");
    fireEvent.click(basicButton);
    expect(mockButton).toHaveBeenCalled();
  });
});

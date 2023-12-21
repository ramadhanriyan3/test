import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import MyButton from "./button";

describe("userButton", () => {
  it("should render a button", () => {
    const mockOnClick = jest.fn();
    render(<MyButton value="userButton" handlerOnClick={mockOnClick} />);

    const userButton = screen.getByTestId("userButton");
    expect(userButton).toBeInTheDocument();
  });

  it("should call onClickFunction when button is clicked", () => {
    const mockOnClick = jest.fn();
    render(<MyButton value="userButton" handlerOnClick={mockOnClick} />);

    const userButton = screen.getByTestId("userButton");
    fireEvent.click(userButton);
    expect(mockOnClick).toHaveBeenCalled();
  });
});

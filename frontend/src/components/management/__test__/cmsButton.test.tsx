import CmsButton from "../buttonImg";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("CmsButton test", () => {
  const handlerMock = jest.fn();
  it("should render cms Button and can be clicked", () => {
    render(
      <CmsButton
        style={true}
        imagePath=""
        handlerOnClick={handlerMock}
        label="ss"
        type="button"
      />
    );

    const cmsButton = screen.getByRole("button");
    expect(cmsButton).toBeInTheDocument();
    fireEvent.click(cmsButton);
    expect(handlerMock).toHaveBeenCalled();
  });
});

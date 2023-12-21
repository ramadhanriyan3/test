import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CmsCard from "../cmsCard";

jest.mock("next/navigation");

describe("Cms Card test", () => {
  it("should render cms card component", () => {
    render(
      <CmsCard
        id={"sdff"}
        price={2222}
        model="cc"
        capacity={3}
        transmission="auto"
        year={2019}
        imagePath="image.url"
      />
    );

    const cmsCard = screen.getByTestId("cmsCard");
    expect(cmsCard).toBeInTheDocument();
  });
});

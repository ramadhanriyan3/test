import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PageWraper from "../pageWrapper";
import CmsTitle from "../mainTitle";
import CardContainer from "../mainPage/cardContainer";

jest.mock("next/navigation");
describe("Page wrapper test", () => {
  it("should render a main Menu component", () => {
    render(
      <PageWraper buttonType={"button"}>
        <CmsTitle />
        <CardContainer />
      </PageWraper>
    );
    const pageWrapper = screen.getByTestId("pageWrapper");
    expect(pageWrapper).toBeInTheDocument();
  });
});

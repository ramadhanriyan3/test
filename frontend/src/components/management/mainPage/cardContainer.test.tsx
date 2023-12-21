import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import CardContainer from "./cardContainer";
import { ButtonTypeContext } from "@/components/buttonTypeContext";
import BasicButton from "../basicbutton";

// Mock the axios module
jest.mock("axios");
jest.mock("next/navigation");
describe("CardContainer", () => {
  it("should render CardContainer correctly", async () => {
    const axiosGetMock = jest.spyOn(axios, "get");
    axiosGetMock.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          image: "/car-image-1.jpg",
          rentPerDay: 50,
          transmission: "Automatic",
          capacity: 5,
          year: 2022,
          model: "Toyota Camry",
        },
      ],
    });

    render(
      <ButtonTypeContext.Provider value={"button"}>
        <CardContainer>
          <BasicButton label={"All"} handlerOnClick={() => {}} />
          <BasicButton label={"Small"} handlerOnClick={() => {}} />
          <BasicButton label={"Medium"} handlerOnClick={() => {}} />
          <BasicButton label={"Large"} handlerOnClick={() => {}} />
        </CardContainer>
      </ButtonTypeContext.Provider>
    );

    await waitFor(() => {});
    const cardContainer = screen.getByTestId("cardContainer");
    expect(cardContainer).toBeInTheDocument();
  });
});

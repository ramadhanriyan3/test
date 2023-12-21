import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CardCar from "./cardCar";
import CarsWrapper from "./carsWrapper";

describe("carsWrapper testing", () => {
  it("should render card components based on filteredData", () => {
    const cardPropVal = [
      {
        id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
        plate: "DBH-3491",
        manufacture: "Ford",
        model: "F150",
        image: "./images/car01.min.jpg",
        rentPerDay: 200000,
        capacity: 2,
        description:
          "Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
        availableAt: "2022-03-23T15:49:05.563Z",
        transmission: "Automatic",
        available: true,
        type: "Sedan",
        year: 2022,
        options: [
          "Cruise Control",
          "Tinted Glass",
          "Tinted Glass",
          "Tinted Glass",
          "AM/FM Stereo",
        ],
        specs: [
          "Brake assist",
          "Leather-wrapped shift knob",
          "Glove box lamp",
          "Air conditioning w/in-cabin microfilter",
          "Body color folding remote-controlled pwr mirrors",
          "Dual-stage front airbags w/occupant classification system",
        ],
        driverType: "dengan sopir",
      },
    ];
    render(<CarsWrapper filteredData={cardPropVal} />);
    const carsWrapper = screen.getByTestId("carsWrapper");
    expect(carsWrapper).toBeInTheDocument();

    const cardCar = screen.getAllByTestId("cardCar");
    expect(cardCar).toHaveLength(cardPropVal.length);
  });
});

import app from "./../../server";
import { CarsModel } from "../models/cars";
import request from "supertest";
import CarServices from "../services/car";

describe("Get /cars", () => {
  it("should response with 200 as status code", async () => {
    const mockCarList = [{ id: 1, brand: "Toyota", model: "Camry" }];
    const res = await request(app).get("/cars");
    expect(res.statusCode).toBe(200);
    expect(res.header["content-type"]).toMatch("application/json");
  });
});

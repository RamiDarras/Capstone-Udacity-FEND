/** @jest-environment node */

const request = require("supertest");
const fetch = require("node-fetch");
const app = require("../server/app");

jest.mock("node-fetch");

describe("POST /addTrip temperature values", () => {
 beforeEach(() => {
  fetch.mockReset();
 });

 it.each([
  ["zero high and low", { high_temp: 0, low_temp: 0, temp: 12 }, 0, 0],
  ["zero without a current temperature", { high_temp: 0, low_temp: 0 }, 0, 0],
  ["negative temperatures", { high_temp: -1, low_temp: -8, temp: -3 }, -1, -8],
  ["missing forecast temperatures", { temp: 12 }, 12, 12],
  ["null forecast temperatures", { high_temp: null, low_temp: null, temp: 0 }, 0, 0]
 ])("preserves %s", async (_name, temperatures, high, low) => {
  fetch
   .mockResolvedValueOnce({
    json: async () => ({
     geonames: [{ lat: "60.17", lng: "24.94", countryName: "Finland" }]
    })
   })
   .mockResolvedValueOnce({
    json: async () => ({
     data: [{ weather: { description: "Clear" }, ...temperatures }]
    })
   })
   .mockResolvedValueOnce({
    json: async () => ({ hits: [{ webformatURL: "https://example.com/city.jpg" }] })
   });

  const response = await request(app)
   .post("/addTrip")
   .send({ city: "Helsinki", date: "2099-01-01" });

  expect(response.statusCode).toBe(200);
  expect(response.body.weather).toEqual({ description: "Clear", high, low });
  expect(fetch).toHaveBeenCalledTimes(3);
 });
});

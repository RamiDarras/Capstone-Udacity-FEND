// src/server/app.test.js
const request = require("supertest");
const app = require("../server/app");

// Because .env usage is relevant, ensure your .env is loaded if needed
// require('dotenv').config(); // sometimes needed if we rely on environment variables

describe("Testing Express server endpoints", () => {
 // Test the GET /
 test("GET / should return welcome message", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toContain(
   "This is the server API page, you may access its services via the client app."
  );
 });

 // Test the POST /api route with a valid URL
 test("POST /api with valid URL", async () => {
  const response = await request(app)
   .post("/api")
   .send({ url: "https://www.google.com" })
   .set("Accept", "application/json");

  expect(response.statusCode).toBe(200);
  // For a real test, you could expect something about the MeaningCloud structure,
  // e.g. check if certain fields exist in the JSON, etc.
  expect(response.body).toHaveProperty("status");
  // or other fields that you normally get from MeaningCloud
 });

 // Test the POST /api route with an invalid or empty URL
 test("POST /api with invalid URL", async () => {
  const response = await request(app)
   .post("/api")
   .send({ url: "" })
   .set("Accept", "application/json");

  // Depending on how your server logic handles invalid input,
  // you might get 200 but with an error in the response body,
  // or maybe you do 400 or 500. Adjust your expectations accordingly:
  expect(response.statusCode).toBe(200);
  // Possibly check for a certain property in the response
  expect(response.body).toHaveProperty("status");
 });
});

const request = require("supertest");
const app = require("../server/app"); // Import the app, not the file that listens

describe("Test the /test endpoint", () => {
 it("should return a success message", async () => {
  const response = await request(app).get("/test");
  expect(response.statusCode).toBe(200);
  // etc.
 });
});

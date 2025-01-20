import { checkForName } from "../client/js/nameChecker";

describe("Testing the checkForName function", () => {
 test("Testing name validity with 'Rami'", () => {
  expect(checkForName("Rami")).toBe(false);
 });

 test("Testing name validity with 'Kirk'", () => {
  expect(checkForName("Kirk")).toBe(true);
 });

 // Additional tests if you want
});

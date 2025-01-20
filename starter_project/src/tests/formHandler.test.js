/**
 * @jest-environment jsdom
 */

import { validURL, handleSubmit } from "../client/js/formHandler";

// Mock for alert
global.alert = jest.fn();

describe("Testing formHandler module", () => {
 test("Testing validURL() with a valid URL", () => {
  expect(validURL("https://www.google.com")).toBe(true);
 });

 test("Testing validURL() with an invalid URL", () => {
  expect(validURL("not-a-valid-url")).toBe(false);
 });

 test("handleSubmit should be defined", () => {
  expect(handleSubmit).toBeDefined();
 });

 test("handleSubmit should be a function", () => {
  expect(typeof handleSubmit).toBe("function");
 });

 // Optionally, you can test handleSubmit's behavior by mocking DOM elements:
 test("handleSubmit calls alert if URL is invalid", () => {
  // Create a fake DOM form
  document.body.innerHTML = `<form id="urlForm">
      <input id="name" value="not-a-valid-url" />
    </form>`;

  // Mock the event
  const event = { preventDefault: jest.fn() };

  // Call handleSubmit
  handleSubmit(event);

  // Because it's invalid, we expect an alert
  expect(alert).toHaveBeenCalledWith("Please enter a valid URL!");
 });
});

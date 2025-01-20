// formHandler.test.js
import { validURL } from "./formHandler";

test("Testing validURL with a known URL", () => {
 expect(validURL("https://www.google.com")).toBe(true);
});

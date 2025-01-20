// nameChecker.test.js
import { checkForName } from "./nameChecker";
test("Testing name validity", () => {
 expect(checkForName("Rami")).toBe(false);
});

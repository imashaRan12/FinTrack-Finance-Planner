// Import the module to be tested
const { sum } = require("../../src/sum"); // Adjust the path to your module

// Example test case
describe("Sum Function", () => {
  test("should add two numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

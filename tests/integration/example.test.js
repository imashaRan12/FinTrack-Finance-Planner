// Import the module to be tested
const { fetchData } = require("../../src/fetchData"); // Adjust the path to your module

// Example test case
describe("Fetch Data Function", () => {
  test("should fetch data correctly", async () => {
    const data = await fetchData("https://api.example.com/data");
    expect(data).toBeDefined();
  });
});

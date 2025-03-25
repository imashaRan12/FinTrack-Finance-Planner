module.exports = {
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/tests/integration/**/*.test.[jt]s?(x)",
    "<rootDir>/__tests__/**/*.test.[jt]s?(x)",
  ],
  testPathIgnorePatterns: ["/node_modules/"],
};

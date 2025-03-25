module.exports = {
  verbose: true,
  testEnvironment: "node",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  rootDir: "./",
  testMatch: [
    "<rootDir>/tests/unit/**/*.test.(js|jsx|ts|tsx)",
    "<rootDir>/tests/integration/**/*.test.(js|jsx|ts|tsx)",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};

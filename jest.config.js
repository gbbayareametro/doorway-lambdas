module.exports = {
  testEnvironment: "node",
  roots: ["./handlers"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

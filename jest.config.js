export default {
  testEnvironment: "node",
  roots: ["lib/handler-functions"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

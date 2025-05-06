/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  //maxWorkers: 1, // Run tests sequentially
  testMatch: ['**/*.test.ts'], // Match your test files
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};
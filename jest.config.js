module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules", "/dist"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.jest.json",
      isolatedModules: true,
    },
  },
  globalSetup: "./jest.init.js",
  roots: ["src/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
};

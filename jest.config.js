module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true,
        ignoreCodes: ["TS7016"]
      }
    }
  },
  testEnvironment: "node",
  roots: ["<rootDir>/app"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};

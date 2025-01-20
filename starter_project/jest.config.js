// jest.config.js
module.exports = {
 // We want a browser-like environment (jsdom) for testing DOM-related code.
 testEnvironment: "jest-environment-jsdom",

 // This tells Jest: whenever you import a .css or .scss file, mock it.
 moduleNameMapper: {
  "\\.(css|scss)$": "identity-obj-proxy"
 }
};

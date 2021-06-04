// JSON Package
const pkg = require("../../package.json");

// Database & Schemas configuration
module.exports = {
  applicationName: pkg.name,
  mongodb: {
    url: "mongodb://localhost:37017/merchants",
  },
  redis: {
    port: 7379,
    client: null,
  },
  mysql: {
    options: {
      host: "localhost",
      port: 3406,
      database: "merchants",
      dialect: "mysql",
      username: "root",
      password: "mypassword",
    },
    client: null,
  },
};

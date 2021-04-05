/** @format */

module.exports = {
  apps: [
    {
      name: "chilli-bot",
      script: "./index.js",
      instances: "1",
      exec_mode: "cluster",
    },
  ],
};

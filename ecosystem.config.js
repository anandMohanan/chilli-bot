/** @format */

module.exports = {
  apps: [
    {
      name: "chilli-bot",
      script: "./index.js",
      instances: "8",
      exec_mode: "cluster",
    },
  ],
};

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/test.js",
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: "bundle.js",
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.js/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

// babel cli allows you to run bable from command line
// babel core allows you to run bable from tools ie webpack
// babel-loader plugin for webpack - helps it handle files

const path = require("path");

const config = {
  // entry: "./src/screen/desktop.js",
  entry: "Screens/desktop.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "desktop.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, 'src/utils/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Logics: path.resolve(__dirname, 'src/logic/'),
      Screens: path.resolve(__dirname, 'src/screen/'),
      Services: path.resolve(__dirname, 'src/services/'),
      Assets: path.resolve(__dirname, 'src/assets/')
    },
  }
};
module.exports = config;

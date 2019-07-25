const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const envDescription = "development";

process.env.NODE_ENV = envDescription;

module.exports = {
  mode: envDescription,
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "client/build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:2014")
    }),
    new HtmlWebpackPlugin({
      template: "./client/src/index.html",
      favicon: "./client/favicon.png"
    })
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

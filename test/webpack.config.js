const webpack = require("webpack");

const path = require("path");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = {
  target: 'node',
  entry: {
    index: path.resolve(__dirname, "index.ts")
  },
  output: {
    path: path.resolve(__dirname, "server"),
    filename: "[name].bundle.js"
  },
  mode: "development",
  devtool: 'inline-source-map',
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".ts"],
    alias: {
      "@Bonbons": path.resolve(__dirname, "./../@Bonbons.koa/index")
    }
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  }
};

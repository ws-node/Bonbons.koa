const webpack = require("webpack");

const path = require("path");

module.exports = {
  target: 'node',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, "index.ts")
  },
  output: {
    filename: 'index.js',
    library: 'bonbons.koa',
    libraryTarget: 'umd'
  },
  mode: "production",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};

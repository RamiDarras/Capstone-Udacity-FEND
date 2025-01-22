const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// Optional for Service Workers
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
 mode: "production",
 devtool: "source-map",
 stats: "normal",
 entry: "./src/client/index.js",
 output: {
  libraryTarget: "var",
  library: "Client",
  path: path.resolve(__dirname, "dist"),
  filename: "bundle.[contenthash].js"
 },
 module: {
  rules: [
   {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader"
   },
   {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
   }
  ]
 },
 plugins: [
  new CleanWebpackPlugin(),
  new HtmlWebPackPlugin({
   template: "./src/client/views/index.html",
   filename: "index.html"
  }),
  new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  // Optional: generate a service worker in production
  new WorkboxPlugin.GenerateSW({
   clientsClaim: true,
   skipWaiting: true
  })
 ]
};

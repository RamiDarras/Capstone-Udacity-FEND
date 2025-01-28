const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
 mode: "development",
 devtool: "source-map",
 stats: "minimal",
 entry: "./src/client/index.js",
 output: {
  libraryTarget: "var",
  library: "Client"
 },
 devServer: {
  // automatically open browser
  open: true,
  // let devServer run on port 8080
  port: 8080
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
    use: [
     process.env.NODE_ENV !== "production"
      ? "style-loader"
      : MiniCssExtractPlugin.loader,
     "css-loader",
     {
      loader: "sass-loader",
      options: {
       // Prefer Dart Sass
       implementation: require("sass")
      }
     }
    ]
   }
  ]
 },
 plugins: [
  new HtmlWebPackPlugin({
   template: "./src/client/views/index.html",
   filename: "index.html"
  })
 ]
};

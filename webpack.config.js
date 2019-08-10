const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hello Webpack bundled JavaScript Project",
      template: "./src/index.html"
    })
  ],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  //Let web dev server know
  //Redirect all server req to index.html
  devServer: {
    contentBase: __dirname + "/dist",
    historyApiFallback: true,
    open: true,
    publicPath: "/"
  }
};

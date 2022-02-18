const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: [
      "babel-runtime/regenerator",
      "babel-register",
      "webpack-hot-middleware/client?reload=true",
      "./src/main.js",
    ],
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    stats: {
      colors: true,
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(jepeg|jpg|gif|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff2|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "webfonts/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      title: "File Uploader (Test Task)",
      inject: true,
    }),
  ],
};

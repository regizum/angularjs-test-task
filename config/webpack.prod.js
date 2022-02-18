const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    main: ["./src/main.js"],
  },
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: {
              minimize: true,
            },
          },
        }),
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
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
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
    ],
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "production",
      },
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      title: "File Uploader (Test Task)",
      inject: true,
    }),
  ],
};

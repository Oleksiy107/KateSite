const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][fullhash].js",

    clean: true,
    publicPath: "./",
  },

  //
  devServer: {
    watchFiles: "src/**/*",

    devMiddleware: {
      writeToDisk: true,
    },
    port: 5555,
    compress: true,
    hot: true,

    open: true,

    static: {
      directory: path.join(__dirname, "./dist"),
    },
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["node_modules"],
              },
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "videos/[name].[ext]",
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "My web Page",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name][fullhash].css",
    }),
  ],
};

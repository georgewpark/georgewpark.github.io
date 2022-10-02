const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ],
                ],
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      }
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  watch: true,
}
import { Configuration } from "webpack";

const config: Configuration = {
  mode: "development",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        loader: "babel-loader",
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

export default config;

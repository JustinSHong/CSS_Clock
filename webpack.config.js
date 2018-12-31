const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "Drum Kit",
            template: "src/index.html"
        })
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    "css-laoder",
                    "less-loader"
                ]
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["tsx", ".ts", ".js"]
    },
    mode: "development"
};

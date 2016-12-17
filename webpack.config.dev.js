var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "./src/js/index",
        "./src/scss/main.scss"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: "bundle.min.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.min.css", {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};

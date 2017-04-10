const HtmlWebpackPlugin = require('html-webpack-plugin');

let path = require('path');
module.exports = {
    entry: [
        path.join(__dirname, './index.js'),
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.(css)$/,
            loader: 'scss-loader',
            exclude: /node_modules/,
        }
        ]
    }
};
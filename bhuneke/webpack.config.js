const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            use: 'eslint-loader',
            exclude: 'node_modules'
        }, {
            test: /\.js$/,
            exclude: 'node_modules',
            use: 'babel-loader?presets[]=react&presets[]=es2015',
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    }
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'src/index.js'),
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] }
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};

// export default () => ({
//     entry: [
//         path.join(__dirname, 'src/index.js'),
//     ],
//     output: {
//         path: path.join(__dirname, 'build'),
//         filename: 'bundle.js',
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: './src/index.html'
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 enforce: 'pre',
//                 test: /\.js?$/,
//                 loader: 'eslint-loader',
//                 exclude: /node_modules/
//             }, {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 options: { presets: ['es2015'] }
//             }, {
//                 test: /\.scss$/,
//                 loader: 'style-loader!css-loader!sass-loader'
//             }
//         ]
//     }

// });

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: './build',
//         filename: 'bundle.js'
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             // filename: 'index.html',
//             template: './src/index.html'
//         })
//     ],
//     module: {
//         rules: [{
//             enforce: 'pre',
//             test: /\.js$/,
//             loader: 'eslint-loader',
//             exclude: /node_modules/
//         }, {
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
//             options: { presets: ['es2015'] }
//         }
//         ]
//     }
// };
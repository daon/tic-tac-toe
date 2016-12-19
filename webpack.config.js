'use strict';

let path = require('path');

let HtmlPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'tic-tac-toe': path.resolve(__dirname, 'src/index.js')
    },  
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js',
        // publicPath: '/tic-tac-toe/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new CleanPlugin([path.resolve(__dirname, 'build')]),
        new ExtractTextPlugin('[name].[hash].css'),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            path: path.resolve(__dirname, 'build'),
            inject: false
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: 9000
    }
};
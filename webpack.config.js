'use strict';

let path = require('path');

let HtmlPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
    env = env || 'DEV';
    let config = {};
        
    config.entry = {
        'tic-tac-toe': path.resolve(__dirname, 'src/index.js')
    };  

    config.output = {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js'
    };

    if (env === 'PROD') {
        config.output.publicPath = '/tic-tac-toe';
    }
    
    config.module = {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    };
    
    config.plugins = [
        new CleanPlugin([path.resolve(__dirname, 'build')]),
        new ExtractTextPlugin('[name].[hash].css'),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            path: path.resolve(__dirname, 'build'),
            inject: false
        })
    ];
        
    config.devServer = {
        contentBase: path.resolve(__dirname, 'build'),
        inline: false,
        port: 9000
    };

    return config;
};
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const outputDir = 'dev';


const webpackConfig = merge(webpackBaseConfig, {
    devtool: 'cheap-source-map', 
    output: {
        path: path.resolve(__dirname, '../' + outputDir + '/'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunks.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract('css-loader'),
            }
        ],
    },
    plugins: [         
        new ExtractTextPlugin('style/[name].css'), 
    ],
});


module.exports = webpackConfig;

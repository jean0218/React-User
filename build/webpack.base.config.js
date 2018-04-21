var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


var webpackBaseConfig = {
    resolve: {
        extensions: [".js", ".json", ".jsx"],
        alias: {
            baseUI: path.resolve(__dirname, '../src/base/baseUI/baseUI.js'),
            baseUtils: path.resolve(__dirname, '../src/base/baseUtils/baseUtils.js'),
        }
    },

    entry: {
        user:path.resolve(__dirname, '../src/views/index.js'),
    },
    
    module: {
        noParse: /node_modules\/(jquey\.js)/,
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "es2015", 'stage-0', 'react'
                    ]
                }
            }]       
        }]
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            title: "user", 
            template: path.resolve(__dirname, '../src/template/template.html'),
            filename: "index.html", 
        }),
    ],
}

module.exports = webpackBaseConfig;
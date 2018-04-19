var webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const outputDir = 'app';



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
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});


module.exports = webpackConfig;


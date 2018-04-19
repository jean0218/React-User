var webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const outputDir = 'production';


const webpackConfig = merge(webpackBaseConfig, {
    //文件输出配置
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
        new webpack.DefinePlugin({ 
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new webpack.optimize.UglifyJsPlugin({     
            beautify: false,
            comments: false
            compress: {
              warnings: false,
              drop_console: true,
              collapse_vars: true,
              reduce_vars: true,
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
    ],
});


module.exports = webpackConfig;

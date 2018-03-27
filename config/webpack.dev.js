/**
 *@Description 开发环境Webpack配置项
 */
'use strict';
const webpackConf = require('./webpack.base');
const webpackCommon = require('./webpack.base');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const LiveReloadPlugin = require('webpack-livereload-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const jquery = require("jquery");

const options = {
    output: {
        path: path.join(__dirname, '../build/'),
        publicPath: '/',
        filename: 'assets/scripts/[name].bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../src/assets'),
                to: path.join(__dirname, '../build/assets'),
                toType: "dir"
            }
        ]),
        new webpack.LoaderOptionsPlugin({
            options: {}
        }),
        // new webpack.ProvidePlugin({
        //     jQuery: "jquery",
        // }),
        // new HtmlWebpackPlugin({
        //     template: path.join(webpackConf.rootPath, './src/log4js.json'),
        //     filename: './log4js.json',
        //     inject: false
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: 'assets/scripts/[name].bundle.js'
        // }),
        new HtmlWebpackPlugin({
            template: path.join(webpackConf.rootPath, './src/views/common/pages/layout.html'),
            filename: './views/common/pages/layout.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(webpackConf.rootPath, './src/views/error/pages/404.html'),
            filename: './views/error/pages/404.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(webpackConf.rootPath, './src/views/error/pages/500.html'),
            filename: './views/error/pages/500.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(webpackConf.rootPath, './src/views/index/pages/index.js'),
            filename: './views/index/pages/index.html',
            inject: false,
            chunks: ['vendor', 'common', 'index_index']
        }),
        new HtmlWebpackPlugin({
            template: path.join(webpackConf.rootPath, './src/views/gettingstarted/pages/index.js'),
            filename: './views/gettingstarted/pages/index.html',
            inject: false,
            chunks: ['vendor', 'common', 'gettingstarted_index']
        }),
        // new HtmlWebpackPlugin({
        //     template: path.join(webpackConf.rootPath, './src/views/guide/pages/index.js'),
        //     filename: './views/guide/pages/index.html',
        //     inject: false,
        //     chunks: ['vendor', 'common', 'guide_index']
        // }),

 
        // new HtmlWebpackPlugin({
        //     template: path.join(webpackConf.rootPath, './web/views/studentsResume/pages/layout.html'),
        //     filename: './views/studentsResume/pages/layout.html',
        //     inject: false,
        // }),
        // new LiveReloadPlugin({
        //     appendScriptTag: true
        // }),
        // //webpack.optimize.UglifyJsPlugin
        // new ExtractTextPlugin("./assets/styles/[name].css"),
        
        // new webpack.LoaderOptionsPlugin({ //压缩css部分
        //     minimize: false
        // }),
    ]
};
const _options = Object.assign(options, webpackCommon.dev);
for (let i in webpackCommon.TemplatePage) {
    _options.plugins.push(
        new HtmlWebpackPlugin({
            template: webpackCommon.TemplatePage[i],
            filename: './widgets/' + i + '/' + i + '.html',
            inject: false
        })
    )
};
module.exports = _options;
'use strict';
var extend = require('xtend');
var webpack = require('webpack');

var common = require('./webpack.common');


module.exports = extend(common, {
    devtool: 'cheap-source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './demos/index',
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/demos/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development")
        }
      }),
    ],
    module: {
        loaders: common.loaders.concat([{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'jsx-loader?harmony'],
        }])
    }
});

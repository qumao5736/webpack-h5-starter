const webpack = require('webpack');
const merge = require('webpack-merge');
const commConfig = require('./webpack.comm.config');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            './src/js/index.js'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true
    }
}

module.exports = merge(commConfig, devConfig);
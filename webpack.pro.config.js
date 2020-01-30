const merge = require('webpack-merge');
const commConfig = require('./webpack.comm.config');

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: {
        index: './src/js/index.js'
    },
    output: {
        publicPath: "https://cache1.hosvr.cn",
    }
}

module.exports = merge(commConfig, prodConfig);
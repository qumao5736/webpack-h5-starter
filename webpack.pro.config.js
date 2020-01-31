const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const merge = require('webpack-merge');
const commConfig = require('./webpack.comm.config');

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: {
        index: './src/js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        publicPath: "https://cache1.hosvr.cn",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[hash:8].css',
            chunkFilename: 'styles/[name].[hash:8].css'
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}

module.exports = merge(commConfig, prodConfig);
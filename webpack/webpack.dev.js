const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common,{
    devtool: 'inline-source-map',
    mode:'development',
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','resolve-url-loader','postcss-loader?sourceMap','sass-loader?sourceMap']
            }
        ]
    }
});

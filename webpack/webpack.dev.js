const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common,{
    mode:'development',
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    }
});

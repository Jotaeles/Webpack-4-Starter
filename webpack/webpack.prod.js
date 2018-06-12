const common =  require('./webpack.common.js');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass =  new ExtractTextPlugin({
    filename: 'css/[name].[hash].css'
})

module.exports = merge(common,{
    mode:'production',
    output:{
        publicPath: '.'
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use:[
                        {loader:'css-loader', options: { minimize: true }},
                        {loader: 'sass-loader'}
                    ]
                })
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader: 'html-loader', options: { minimize:true, attrs:false }
                    }
                ]
            }
        ]
    },
    plugins: [extractSass]
});
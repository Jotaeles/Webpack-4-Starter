const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html'
});

module.exports = {
    entry: './app/scripts/entry.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },
    plugins: [htmlWebpack],
    module: {
        rules:[
            {
                test: /\.jpg$/,
                use: 'url-loader'
            }
        ]
    }
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
    template: './app/index.pug',
    filename: 'index.html'
});

module.exports = {
    entry: './app/scripts/app.ts',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },
    plugins: [htmlWebpack],
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['env']
                        }
                    },
                    {
                        loader:'ts-loader'
                    }
                ]
            },
            {
                test: /\.pug$/,
                use:['html-loader','pug-html-loader']
            },
            {
                test: /\.jpg$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TSLintWebpackPlugin = require('tslint-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
    template: './app/pugs/views/home/home.pug',
    filename: 'index.html',
    chunks: ['home']
});
const htmlWebpackAbout = new HtmlWebpackPlugin({
    template: './app/pugs/views/about/about.pug',
    filename: 'about.html',
    chunks: ['about']
});

module.exports = {
    entry: {
        'home': './app/scripts/views/home/home.main.ts',
        'about':'./app/scripts/views/about/about.main.ts'
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        htmlWebpack, 
        htmlWebpackAbout,
        new TSLintWebpackPlugin({
            files: ['./app/**/*.ts']
        })
    ],
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
                    },
                    {
                        loader: 'tslint-loader'
                    }
                ]
            },
            {
                test: /\.pug$/,
                use:['html-loader','pug-html-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|)(\?.*)?$/,
                use: 'file-loader?name=fonts/[name][hash].[ext]'
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
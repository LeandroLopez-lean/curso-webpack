const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
     resolve: {
        extensions: ['.js', '.png']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
                
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
} 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js',
        assetModuleFilename: 'images/[name][ext][query]'
    },

    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
        },
        open: true,
        compress: true,        
        port: 8080,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Bicycle Theme',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

     module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
                exclude: /fonts/,
            },
            
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
                exclude: /images/,
            },
            
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                             publicPath: "./",
                        },
                    },
                    'css-loader', 'postcss-loader','sass-loader'
                 ],
             },
            
         ],
         
    }       
}
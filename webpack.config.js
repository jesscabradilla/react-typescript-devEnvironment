const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');


const srcFolder = 'src';
const distFolder = 'dist';

const env = process.env.NODE_ENV || 'development';

module.exports = {
    mode: env,
    
    entry: {
        'app': path.join(__dirname, srcFolder, 'ts', 'app.tsx')
    },

    resolve: {
        extensions: [' ', '.js', '.ts', '.tsx', '.json']
    },

    resolveLoader: {
        moduleExtensions: [ '-loader' ]
    },

    output: {
        path: path.join(__dirname, distFolder, 'js'),
        filename: '[name].js',
        publicPath: '/js'
    },

    module: {
        rules: [

            { test: /\.tsx?$/, loader: 'ts-loader' },

            { test: /\.json$/, loader: 'json-loader'},
      
            {
                test: /\.scss$/,
                exclude: [path.join(__dirname, srcFolder, 'ts')],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'   
                ]
            },

            {
                test: /\.scss$/,
                exclude: [path.join(__dirname, srcFolder, 'scss')],
                loader: [
                    'raw-loader', 
                    'sass-loader'
                ]    
            }
        ]
    },

  
    plugins: [
        
        new ProvidePlugin({
            'Promise': 'es6-promise',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
    
        new CopyWebpackPlugin([{
            from: path.join(srcFolder, 'images'),
            to: path.join('..', 'images')
        }]),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, srcFolder, 'ts', 'index.html'),
            filename: path.join('..', 'index.html'),
            inject: 'body'
        })

    ],

    devtool: 'source-map',

    devServer: {
        contentBase: 'dist',
        historyApiFallback: true,
        port: 5000,
        proxy: {
            '/widgets': {
                target: 'http://localhost:3010'
            }
        }
    }
};

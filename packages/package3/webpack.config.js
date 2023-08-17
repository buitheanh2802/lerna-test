const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = (env,args) => {
    const isDevMode = args.mode == 'development';
    return {
        entry: {
            main: path.resolve(process.cwd(),'./src/index.jsx')
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
        devServer: {
            port: 3000,
            hot: true,
            allowedHosts: "all",
            host: '0.0.0.0'
        },
        output: {
            publicPath: '/',
            path: path.resolve(process.cwd(),'./build'),
            filename: 'main.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(process.cwd(),'./public/index.html')
            }),
            new Webpack.ProvidePlugin({
                styled: ''
            })
        ],
        resolve: {
            extensions: ['.tsx','.jsx','.js']
        }
    }
}
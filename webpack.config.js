const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    return {
        mode: env.mode,
        entry: Path.join(__dirname, 'src', 'index.js'),
        output: {
            filename: '[name].[contenthash].js',
            path: Path.resolve(__dirname, 'dist'),
            clean: true
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                },
                {
                    test: /.s[ac]ss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: env.mode === 'production'
                                ? MiniCssExtractPlugin.loader
                                : 'style-loader'
                        },
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            new HtmlWebpackPlugin({
                template: Path.join(__dirname, 'index.html'),
                filename: 'index.html'
            })
        ],
        resolve: {
            extensions: ['.js']
        }
    };
};
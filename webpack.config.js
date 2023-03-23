const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    target: "node",
    externals: [nodeExternals()],
    // context: __dirname,
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
        './src/backend/server.ts'
    ],
    mode: "development",
    devtool: 'inline-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist/server'),
        clean: true,
        publicPath: ASSET_PATH,
    },
    stats: {
        errorDetails: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                        },
                    },
                ],
                exclude: /node_modules/,
                sideEffects: true,
            },
        ]
    },

};
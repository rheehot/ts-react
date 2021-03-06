const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
    },
    entry: {
        app: './index'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist'
    }
}
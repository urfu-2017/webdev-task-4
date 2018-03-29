const ExtractTextPlugin = require('extract-text-webpack-plugin'); /* eslint-disable-line */
module.exports = { /* eslint-disable-line */
    entry: './src/toggleNav.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    }
};

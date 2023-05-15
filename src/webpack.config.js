module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
rules: [
    {
        test: /\.txt$/,
        use: 'raw-loader'
    },
    {
        test: /\.css$/,
        use: 'css-loader'
    }
]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
          }),
    ]
}
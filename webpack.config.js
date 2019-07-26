const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


let stylusLoader = {
    loader: 'stylus-relative-loader'
};

let jsLoader = {
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
    }
};

let fontLoader = {
  loader: 'file-loader',
  options: {name: "fonts/[name].[ext]"}
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: [jsLoader], exclude: /node_modules/ },
            { test: /\.coffee$/, use: [jsLoader, "coffee-loader"] },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: [fontLoader]},
            { test: /\.styl$/, use: ["style-loader", "css-loader", stylusLoader] },
            { test: /\.css$/, use: ["style-loader", 'css-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
      extensions: [".coffee", ".js", ".styl",".css",".html",".md"],
    }
}

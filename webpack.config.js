var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./js/react/app.jsx"
    },
    output: {
        path: "./js/build",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader" },
            { test: /\.styl$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader") }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./../../css/style.css")
    ]
};
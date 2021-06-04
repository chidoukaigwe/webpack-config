const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let mode = "development"
let target = "web"

if(process.env.NODE_ENV === 'production'){
    mode = "production";

}

module.exports = {
    mode: mode,

    module:{
        rules:[
            {
                test:/\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
    },

    plugins:[
        new MiniCssExtractPlugin()
    ],

    // devtool: false,
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        port:8000,
        hot: true,
    }
}
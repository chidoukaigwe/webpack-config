const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let mode = "development"

if(process.env.NODE_ENV === 'production'){
    mode = "production";
}

module.exports = {
    mode: mode,

    output:{
        assetModuleFilename: 'images/[hash][ext][query]'
    },

    module:{
        rules:[
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
            {
                test:/\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
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

    resolve: {
        extensions: [".js", ".jsx"]
    },

    // devtool: false,
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        port:8000,
        hot: true,
    }
}
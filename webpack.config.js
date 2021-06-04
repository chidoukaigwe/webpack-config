let mode = "development"

if(process.env.NODE_ENV === 'production'){
    mode = "production"
}

module.exports = {
    mode: mode,

    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
    },
    // devtool: false,
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        port:8000
    }
}
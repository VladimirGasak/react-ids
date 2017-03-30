/**
 * Created by dingjunyi on 2017/3/28.
 */
const path = require('path');
module.exports = {
    entry: {
        search: "./app/search/entry.js",
        main: "./app/main/entry.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js[x]?$/, loader: "babel-loader?presets[]=es2015&presets[]=react", include: /app/},
            { test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
        ]
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    devtool: false,
    entry: {
        app:"./src/app.js",
        help:"./src/page/page.js"
    },
    output:{
        path: path.resolve("./dist"),
        filename: "js/[name].[hash:5].bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:["babel-loader"],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader, {
                    loader:"css-loader",
                    options:{
                        modules:true
                    }
                }]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader: 'file-loader',
                    options: {
                        name:"img/[hash].[ext]"
                    }
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"这里是页面标题",
            template:"public/index.html" //这里是配置页面模板，在模板中可以使用<%= htmlWebpackPlugin.options %>动态读取插件的配置对象
        }),
        new CleanWebpackPlugin(),//打包后清理之前的文件
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:5].css"
        })
    ],
    devServer:{
        quiet:true
    }
}
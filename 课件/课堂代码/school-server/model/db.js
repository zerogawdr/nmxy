//连接数据库，统一导入的入口
//1. 连接数据库
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/schooldb", {
    useNewUrlParser: true
});

//2. 统一导出所有模型
module.exports = {
    Course: require("./course"),
    Class: require("./class"),
    Student: require("./student"),
    User: require("./user"),
    ObjectId: mongoose.Types.ObjectId
}
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    loginId: String,
    loginPwd: String
}, {
    versionKey: false
})

const userModel = mongoose.model("user", userSchema);

//如果数据不足（少于10条），则添加测试数据
async function addMockData() {
    const count = await userModel.countDocuments();
    if (count === 0) {
        //添加测试数据
        const list = [{
            loginId:"admin",
            loginPwd:"123456"
        }]
        await userModel.create(list);
        console.log("学生测试数据生成成功");
    }
}

addMockData();

module.exports = userModel;
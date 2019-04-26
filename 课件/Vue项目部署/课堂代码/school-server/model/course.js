const mongoose = require("mongoose")

//1. 创建结构
const courseSchema = new mongoose.Schema({
    name: String,
    hours: Number
}, {
    versionKey: false //不生成版本号
})

const Course = mongoose.model("course", courseSchema);

//如果数据不足（少于10条），则添加测试数据
async function addMockData() {
    const count = await Course.countDocuments();
    if (count === 0) {
        //添加测试数据
        const list = [{
            _id:"5c2c4ef92f420645040ac723",
            name:"HTML+CSS",
            hours:55
        },{
            name:"JavaScript基础",
            hours:75
        },{
            name:"JavaScript进阶",
            hours:25
        },{
            name:"JS库",
            hours:50
        },{
            name:"NodeJS",
            hours:66
        }]
        await Course.create(list);
        console.log("课程测试数据生成成功");
    }
}

addMockData();

module.exports = Course;
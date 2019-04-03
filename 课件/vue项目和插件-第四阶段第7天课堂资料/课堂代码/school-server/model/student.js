const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    address: String,
    phone: String,
    class: {
        type: mongoose.Schema.Types.ObjectId,
            ref: "class"
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    }
}, {
    versionKey: false
})

const Student = mongoose.model("student", studentSchema);

//如果数据不足（少于10条），则添加测试数据
async function addMockData() {
    const count = await Student.countDocuments();
    if (count < 10) {
        //添加测试数据
        const Mock = require("mockjs");
        const result = Mock.mock({
            "list|400": [{
                name: "@cname",
                "gender|1": ["男", "女"],
                "age|18-30": 1,
                address: "@city(true)",
                phone: /1\d{10}/,
                class: "5c2c834e43a8342ca8ba7165",
                course: "5c2c4ef92f420645040ac723"
            }]
        });
        await Student.create(result.list);
        console.log("学生测试数据生成成功");
    }
}

addMockData();

module.exports = Student;
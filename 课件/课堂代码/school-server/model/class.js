const mongoose = require("mongoose")

const classSchema = new mongoose.Schema({
    name: String
}, {
    versionKey: false
})

const ClassModel = mongoose.model("class", classSchema);

//如果数据不足（少于10条），则添加测试数据
async function addMockData() {
    const count = await ClassModel.countDocuments();
    if (count < 10) {
        //添加测试数据
        const Mock = require("mockjs");
        const result = Mock.mock({
            "list|400": [{
                "name|+1": 1,
            }]
        });

        const list = result.list.map(it=>({
            name:"前端"+it.name+"班"
        }))
        list.push({
            _id:"5c2c834e43a8342ca8ba7165",
            name:"前端宇宙班"
        })
        await ClassModel.create(list);
        console.log("班级测试数据生成成功");
    }
}

addMockData();

module.exports = ClassModel;
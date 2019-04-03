const express = require("express");
const router = express.Router();
const db = require("../model/db");

//添加班级
router.post("/", async (req, res) => {
    //如果数据库中不存在任何班级，添加JG1
    const cs = await db.Class.find();
    if (cs.length == 0) {
        const data = await db.Class.create({
            name: "JG1"
        });
        res.send(data);
    } else {
        //如果数据库中存在班级，取最后一个班级，得到它的编号，+1，作为新班级的名称
        const c = cs.pop();
        const newNumber = parseInt(c.name.replace("JG", "")) + 1 // JGXXX
        const data = await db.Class.create({
            name: "JG" + newNumber
        });
        res.send(data);
    }

})


router.delete("/:id", async (req, res) => {
    //如果该班级中有学生，不允许删除（响应false）
    const count = await db.Student.count({
        class: req.params.id
    })
    if (count > 0) {
        res.send(false);
        return;
    }
    await db.Class.deleteOne({ //条件对象
        _id: db.ObjectId(req.params.id)
    });
    res.send(true);
})


//分页，查询
router.get("/", async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    let condition = {}; //条件对象
    if (req.query.key) {
        condition = {
            name: req.query.key.toUpperCase()
        };
    }
    const data = await db.Class.find(condition);
    const count = await db.Class.count(condition); //得到所有数据的数量
    res.send({
        code: 0,
        message: "",
        count,
        data
    });
})

//查询单个
router.get("/:id", async (req, res) => {
    const data = await db.Class.findById(req.params.id);
    res.send(data);
})

module.exports = router;
const express = require("express");
const router = express.Router();
const db = require("../model/db");

router.post("/", async (req, res) => {
    const data = await db.Course.create(req.body)
    res.send(data);
})

router.delete("/:id", async (req, res) => {
    //如果该课程有学生正在学习，不能删除，响应false
    const count = await db.Student.count({
        course: req.params.id
    });
    if (count > 0) {
        res.send(false);
        return;
    }
    await db.Course.deleteOne({ //条件对象
        _id: db.ObjectId(req.params.id)
    });
    res.send(true);
})

//修改
router.put("/:id", async (req, res) => {
    await db.Course.updateOne({ //条件对象
        _id: req.params.id
    }, req.body);
    res.send(true);
})

//查询所有
router.get("/", async (req, res) => {
    if (!req.query.field) { //默认按照_id排序
        req.query.field = "_id";
    }
    if (!req.query.sort) { //默认按照升序排序
        req.query.sort = "asc";
    }
    //拼接排序字符串
    let s = req.query.field;
    if (req.query.sort === "desc") {
        s = "-" + s;
    }
    const data = await db.Course.find().sort(s);
    res.send({
        code: 0,
        message: "",
        count: data.length,
        data
    });
})

//查询单个
router.get("/:id", async (req, res) => {
    const data = await db.Course.findById(req.params.id);
    res.send(data);
})

module.exports = router;
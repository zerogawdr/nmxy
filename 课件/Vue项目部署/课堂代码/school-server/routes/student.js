const express = require("express");
const router = express.Router();
const db = require("../model/db");

router.post("/", async (req, res) => {
    console.log(req.body);
    const data = await db.Student.create(req.body)
    res.send(data);
})

router.delete("/:id", async (req, res) => {
    await db.Student.deleteOne({ //条件对象
        _id: db.ObjectId(req.params.id)
    });
    res.send(true);
})

//修改
router.put("/:id", async (req, res) => {
    await db.Student.updateOne({ //条件对象
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
    //处理分页
    if (!req.query.page) {
        req.query.page = 1; //页索引默认为1
    }
    if (!req.query.limit) {
        req.query.limit = 10; //页容量默认为10
    }
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    let condition = {};
    if (req.query.key) {
        const exp = new RegExp(req.query.key, "i") //不区分大小写，模糊查询的正则表达式
        condition = {
            $or:[
                {name: {$regex: exp}},
                {phone: {$regex: exp}},
                {address: {$regex: exp}}
            ]
        };
    }
    const data = await db.Student.find(condition).populate("class").populate("course").sort(s).skip((page - 1) * limit).limit(limit);
    const count = await db.Student.count(condition);
    res.send({
        code: 0,
        message: "",
        count,
        data
    });
})

//查询单个
router.get("/:id", async (req, res) => {
    const data = await db.Student.findById(req.params.id);
    res.send(data);
})

module.exports = router;
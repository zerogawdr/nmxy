const express = require("express");
const router = express.Router();
const db = require("../model/db");

router.post("/", async (req, res) => {
    const data = await db.User.create(req.body)
    res.send(data);
})

router.delete("/:id", async (req, res) => {
    await db.User.deleteOne({ //条件对象
        _id: db.ObjectId(req.params.id)
    });
    res.send(true);
})

//修改
router.put("/:id", async (req, res) => {
    await db.User.updateOne({ //条件对象
        _id: req.params.id
    }, req.body);
    res.send(true);
})

//查询所有
router.get("/", async (req, res) => {

    const data = await db.User.find();
    res.send({
        code: 0,
        message: "",
        count: data.length,
        data
    });
})

router.post("/login", async (req, res) => {
    //根据传递的账号、密码，从数据库中匹配用户，如果找到用户，将用户对象响应，如果没有找到，响应false
    const data = await db.User.findOne(req.body);
    if(data){
        res.cookie("uid", data._id.toString(), {
            signed:true,
            maxAge: 604800 * 1000
        })
        res.send(data);
    }
    else{
        res.send(false);
    }
})

router.get("/whoami", async (req, res)=>{
    const id = req.signedCookies.uid;
    if (!id) {
        res.send(null);
        return;
    }
    //已登录
    const user = await db.User.findById(id);
    res.send(user);
})

//查询单个
router.get("/:id", async (req, res) => {
    const data = await db.User.findById(req.params.id);
    res.send(data);
})



module.exports = router;
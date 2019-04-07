
//学生数据
const student = Mock.mock({
    "list|1000": [{
        "_id|+1": 1,
        "name": "@name",
        "gender": /[男女]/,
        "age|15-28": 1,
        "address": "@city(true)",
        "className|1": classes.map(it => it.name),
        "courseName|1": courses.map(it => it.name)
    }]
}).list;
Mock.mock(/^\/student([?][^?]+)?$/, "get", function (opt) {
    const q = query(opt.url);
    if (!q.field) {
        q.field = "id";
    }
    if (!q.order) {
        q.order = "desc";
    }
    const result = {
        "code": 0,
        "msg": "",
        "count": student.length,
        "data": _.chunk(_.orderBy(student, [q.field], [q.order]), q.limit)[q.page - 1]
    };
    return result;
});

Mock.mock(/^\/student\/\d+$/, "get", function (opt) {
    const id = _.last(opt.url.split("/"));
    // console.log(id);
    // console.log(student)
    return student.find(it => it._id == id);
});

Mock.mock(/^\/student\/\d+$/, "put", function (opt) {
    const s = decodeBody(opt.body);
    const id = _.last(opt.url.split("/"));
    const olds = student.find(it => it._id == id);
    modifyObj(olds, s);
    return true;
});

Mock.mock("/student", "post", function (opt) {
    const newStu = decodeBody(opt.body);
    newStu.id = Math.max(...student.map(it => it._id)) + 1;
    student.push(newStu);
})

Mock.mock(/^\/student\/\d+$/, "delete", function (opt) {
    const id = _.last(opt.url.split("/"));
    _.remove(student, item => item._id == id);
    return true;
});

function decodeBody(body) {
    const obj = {};
    body.split("&").forEach(item => {
        const [p, v] = item.split("=");
        obj[p] = decodeURIComponent(v);
    })
    return obj;
}

function modifyObj(oldObj, newObj) {
    for (const [p, v] of Object.entries(newObj)) {
        oldObj[p] = v;
    }
}

function query(url) {
    const q = {};
    _.last(url.split("?")).split("&")
        .map(it => it.split("="))
        .forEach(([p, v]) => {
            q[p] = decodeURIComponent(v);
        });
    return q;
}
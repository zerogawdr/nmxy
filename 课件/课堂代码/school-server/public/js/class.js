
//模拟班级数据
const classes = Mock.mock({
    "list|423": [{
        "id|+1": 1,
        "name": "JG@id"
    }]
}).list;

Mock.mock(/^\/class([?][^?]+)?$/, "get", function (opt) {                                  
    const q = query(opt.url);
    const result = {
        "code": 0,
        "msg": "",
        "count": classes.length,
        "data": _.chunk(_.orderBy(classes, ['id'], ['desc']), q.limit)[q.page - 1]
    };
    return result;
});

Mock.mock(/^\/class\/\d+$/, "delete", function (opt) {
    const id = _.last(opt.url.split("/"));
    _.remove(classes, item => item.id == id);
    return true;
});

Mock.mock("/class", "post", function (opt) {
    const newClass = {};
    newClass.id = Math.max(...classes.map(it => it.id)) + 1;
    newClass.name = "JG" + newClass.id;
    classes.push(newClass);
    return newClass;
})


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
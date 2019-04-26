//模拟课程数据
const courses = [{
        id: 1,
        name: "c语言基础",
        hours: 50
    },
    {
        id: 2,
        name: "javascript",
        hours: 40
    },
    {
        id: 3,
        name: "HTML&CSS",
        hours: 60
    },
    {
        id: 4,
        name: "java",
        hours: 70
    }
]

//模拟班级数据
const classes = Mock.mock({
    "list|423": [{
        "id|+1": 1,
        "name": "JG@id"
    }]
}).list;


Mock.mock(/^\/course([?][^?]+)?$/, "get", function () {
    return {
        "code": 0,
        "msg": "",
        "count": courses.length,
        "data": courses
    };
});

Mock.mock(/^\/course\/\d+$/, "get", function (opt) {
    const id = _.last(opt.url.split("/"));
    return courses.find(it => it.id == id);
});

Mock.mock(/^\/course\/\d+$/, "put", function (opt) {
    const c = decodeBody(opt.body);
    const id = _.last(opt.url.split("/"));
    const oldc = courses.find(it => it.id == id);
    modifyObj(oldc, c);
    return true;
});

Mock.mock(/^\/course\/\d+$/, "delete", function (opt) {
    const id = _.last(opt.url.split("/"));
    _.remove(courses, item => item.id == id);
    return true;
});

Mock.mock("/course", "post", function (opt) {
    const newCourse = decodeBody(opt.body);
    newCourse.id = Math.max(...courses.map(it => it.id)) + 1;
    courses.push(newCourse);
})


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
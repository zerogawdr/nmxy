class User {
    constructor(loginId, loginPwd) {
        this.loginId = loginId;
        this.loginPwd = loginPwd;
    }

    readArticle() {
        console.log("阅读文章")
    }
}
class VIPUser extends User {
    publishArticle() {
        console.log("发布文章")
    }
}

function createSomething() {
    const rad = Math.random();
    if (rad < 0.3) {
        return {};
    } else if (rad < 0.6) {
        return new VIPUser("aaa", "bbb");
    } else {
        return new User("xxx", "xxx");
    }
}

const u = createSomething();

if(u instanceof User){
    u.readArticle();
}
else if(u instanceof VIPUser){
    u.publishArticle();
}
else{
    console.log("啥也不是")
}
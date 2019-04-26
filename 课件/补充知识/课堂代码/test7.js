function User(loginId, loginPwd){
    this.loginId = loginId;
    this.loginPwd = loginPwd;
}

User.prototype.readArticle = function(){
    console.log("阅读文章")
}

function VIPUser(loginId, loginPwd){
    //如何实现继承自User
    // User(loginId, loginPwd)
    // User.call(this, loginId, loginPwd)
    User.apply(this, [loginId, loginPwd]);
}

VIPUser.prototype.__proto__ = User.prototype;

VIPUser.prototype.publishArticle = function(){
    console.log("发布文章")
}

const vip = new VIPUser("xxx", "bbb");
console.log(vip.loginId);
vip.readArticle();
vip.publishArticle();
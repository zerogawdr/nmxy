class User {
    public loginId: string;
    public loginPwd: string;
    public readonly id: number; //随机生成
    private _age: number = 0;
    protected count:number = 0;
    private experience:number = 0;

    constructor(loginId: string, loginPwd: string, age: number) {
        this.loginId = loginId;
        this.loginPwd = loginPwd;
        this.age = age;
        this.id = this.getRandomId();
    }

    get age() {
        return Math.floor(this._age);
    }

    set age(val: number) {
        if (val < 0) {
            this._age = 0;
        } else if (val > 100) {
            this._age = 100;
        } else {
            this._age = val;
        }
    }

    private getRandomId() {
        const max = 1000000;
        const min = 1;
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }

    readArticle(){
        if(this.count === 3){
            console.log("你已经达到了今日免费读取文章的上限，请充值")
        }
        else{
            console.log("你读了一篇文章");
            this.count++;
        }
    }

    increateExperience(){
        this.experience += 3;
        console.log("增加了3点经验值");
    }
}

class VIPUser extends User {

    private articles: string[];

    constructor(loginId: string, loginPwd: string, age: number, articles:string[]){
        super(loginId, loginPwd, age); //必须出现在第一行
        this.articles = articles;
    }

    publishArticle(title: string) {
        console.log(`${this.loginId}发布了文章${title}`);
        this.articles.push(title);
    }

    //重写readArticle
    readArticle(){
        if(this.count === 10){
            console.log("你已经达到了今日读取文章的上限，请充值成为超级VIP用户")
        }
        else{
            console.log("你读了一篇文章");
            this.count++;
        }
    }

    //重写函数
    increateExperience(){
        //VIP用户每次相当于执行两次普通用户增加经验
        //需要调用两次父类方法
        super.increateExperience();
        super.increateExperience();
    }
}

const u1 = new VIPUser("xxxx", "fdfd", 22, ['过去发布的1篇文章']);
u1.increateExperience();
u1.increateExperience();
u1.increateExperience();
console.log("--------下面是普通用户--------")
const u2 = new User("sdf", "fdfd", 22);
u2.increateExperience();
u2.increateExperience();
u2.increateExperience();

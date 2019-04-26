//全局执行上下文：
//1.参数：忽略
//2.字面量函数：{test:function}
//3.局部变量：{test:function}

console.log(test); //输出：function
function test(a){
    console.log(a); //输出：function
    var a = 1; // {a:1}
    console.log(a); //输出：1
    a = function(){

    }  // {a:function}
    console.log(a); //输出：function
    a = 2; //{a:2}
    console.log(a); //输出：2
    function a(){

    }
    console.log(a); //输出：2
}

test(3);
//创建test执行上下文
//1. 参数： {a:3}
//2. 字面量函数： {a:function}
//3. 确定局部变量： {a:function}
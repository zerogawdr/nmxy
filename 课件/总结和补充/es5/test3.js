function test(a, b) {
    console.log(s, k);
    var k = 1;
    function s() {

    }
}

test(1, 2);

//创建执行上下文堆栈：
//1. 确定参数值： { a:1, b:2 }
//2. 确定该函数中的字面量函数声明 {a:1, b:2, s:function}
//3. 确定该函数中的所有局部变量 {a:1, b:2, s:function, k:undefined}

//开始执行函数
//第2行：输出：function  undefined
//第3行：重新给k赋值：{a:1, b:2, s:function, k:1}
//执行结束
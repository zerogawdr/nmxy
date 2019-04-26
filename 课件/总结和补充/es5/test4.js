function test(s) {
    console.log(s);
    var s = 1;
    function s() {

    }
}

test(2);

//创建执行上下文堆栈：
//1. 确定参数值： { s:2 }
//2. 确定该函数中的字面量函数声明 {s:function}
//3. 确定该函数中的所有局部变量 {s:function}

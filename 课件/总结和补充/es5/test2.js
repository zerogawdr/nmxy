function test1(){
    test2();
}

function test2(){

}

test1(); 
// 1. 创建test1的执行上下文  全局上下文 test1
// 2. 创建test2的执行上下文  全局上下文 test1  test2
// 3. 销毁test2的执行上下文  全局上下文 test1
// 4. 销毁test1的执行上下文  全局上下文

test1();
// 1. 创建test1的执行上下文  全局上下文 test1
// 2. 创建test2的执行上下文  全局上下文 test1  test2
// 3. 销毁test2的执行上下文  全局上下文 test1
// 4. 销毁test1的执行上下文  全局上下文
function test() {
    setTimeout(function a() {
        console.log("hello")
    }, 3000);
    console.log("123")
}

test();

//执行上下文堆栈：[ 全局执行上下文, test, setTimeout ]
//api调用： []
//事件队列：[]

//执行上下文堆栈：[ 全局执行上下文, test, console.log("123") ]
//api调用： [计时3秒中完成后执行函数a]
//事件队列：[]

//输出：123

//执行上下文堆栈：[ 全局执行上下文, test]
//api调用： [计时3秒中完成后执行函数a]
//事件队列：[]

//执行上下文堆栈：[ 全局执行上下文]
//api调用： [计时3秒中完成后执行函数a]
//事件队列：[]


//执行上下文堆栈：[]
//api调用： [计时3秒中完成后执行函数a]
//事件队列：[]

//等待3秒钟...

//执行上下文堆栈：[]
//api调用： []
//事件队列：[函数a]

//执行上下文堆栈：[函数a]
//api调用： []
//事件队列：[]

//执行上下文堆栈：[函数a, console.log]
//api调用： []
//事件队列：[]

//输出：hello

//执行上下文堆栈：[函数a]
//api调用： []
//事件队列：[]

//执行上下文堆栈：[]
//api调用： []
//事件队列：[]

//程序结束
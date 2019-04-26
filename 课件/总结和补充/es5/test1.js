function test() {
    console.log(a);
    var a = 1;
    function a() {
    }
    console.log(a)
}

test();
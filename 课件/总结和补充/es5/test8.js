function test() {
    var i = 0;
    setTimeout(() => {
        i = 2;
        console.log("settimeout:", i);
    }, 0);
    for (i = 0; i < 1000; i++) {
        console.log(i);
    }
}
test();
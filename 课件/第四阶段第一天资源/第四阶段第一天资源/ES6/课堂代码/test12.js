function getRandom(min, max) {
    const dec = max - min;
    return Math.floor(Math.random() * dec + min);
}

const prom = new Promise((resolve) => {
    console.log("百米冲刺开始");
    const rad = getRandom(1000, 3000);
    setTimeout(function () {
        //冲刺完成
        console.log("冲刺完成！")
        resolve(rad);
    }, rad)
})
//当百米冲刺结束后，1. 记分员记录分数，2. 教练记录是否及格
prom.then((rad) => {
    console.log("记分员记录时间:" + rad + "毫秒");
    return rad;
}).then((rad) => {
    if (rad < 2000) {
        console.log("教练记录：及格," + rad)
    } else {
        console.log("教练记录：不及格," + rad)
    }
})
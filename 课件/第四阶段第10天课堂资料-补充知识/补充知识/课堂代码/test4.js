function Nothing() {}
const obj1 = new Nothing();
const obj2 = new Nothing();

console.log(obj1 === obj2); //输出：？
console.log(obj1.prototype); //输出：？
console.log(obj1.__proto__ === obj2.__proto__); //输出：？
console.log(obj1.__proto__ === Nothing.prototype); //输出：？
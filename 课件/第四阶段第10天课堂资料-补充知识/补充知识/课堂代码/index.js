// function User(firstName, lastName, age, province, city) {
//     //可以使用this
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age;
//     this.fullName = this.firstName + this.lastName;
//     this.address = {
//         province,
//         city
//     }
// }

// User.prototype.sayHello = function() {
//     console.log(`我是${this.fullName}，今年${this.age}岁了，住在${this.address.province}${this.address.city}`)
// }

//ES6的语法糖
class User {
    constructor(firstName, lastName, age, province, city) {
        //可以使用this
        this.firstName = firstName
        this.lastName = lastName
        this.age = age;
        this.fullName = this.firstName + this.lastName;
        this.address = {
            province,
            city
        }
    }

    sayHello() {
        console.log(`我是${this.fullName}，今年${this.age}岁了，住在${this.address.province}${this.address.city}`)
    }
}

const u1 = new User("袁", "进", 18, "四川省", "成都市");

const u2 = new User("袁", "进", 18, "四川省", "成都市");

console.log(u1.sayHello === u2.sayHello);
u1.sayHello();
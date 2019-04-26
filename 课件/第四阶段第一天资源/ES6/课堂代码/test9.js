// const user = {
//     name:"smile",
//     age:18
// }

// // const name = user.name;
// // const age = user.age;

// //替换为

// const {name, age} = user;

// console.log(name, age)

// const arr = [3, 5];

// const [num1, num2] = arr;

// console.log(num1,num2);

//交换两个变量的值

// let a = 1, b = 3;
// [b, a] = [a, b];
// console.log(a, b);

//解构中的默认值

const user = {
    name: "smile",
    age: 20
}

const {name, age, gender="男"} = user;

console.log(name, age, gender);

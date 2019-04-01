// const arr = [3, 6, 8, 2];
//将该数组的所有数据复制到新数组
//1. map
// const newArr = arr.map(it=>it);

//2. 展开运算符
// const newArr = [2, ...arr, 15];

// console.log(newArr)

//对象展开

const user = {
    name:"kevin",
    age:18
}

//复制(克隆)该对象
// const newUser = {...user};

//克隆后添加属性，或覆盖属性
const newUser = {
    ...user,
    gender:"男",
    age:25
}

console.log(newUser, newUser === user);
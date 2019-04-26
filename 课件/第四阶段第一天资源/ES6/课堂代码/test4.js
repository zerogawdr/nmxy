const arr = [3, 6, 8, 31, 534, 8, 7];

//从数组arr中得到所有的奇数（新数组）

const newArr = arr.filter(item=>item % 2 !== 0)

console.log(newArr);
function add(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(add(3, 5, 6, 56, 3));
function getRandom(min = 0, max = 10) {
    const dec = max - min;
    return Math.floor(Math.random() * dec + min);
}

const rad = getRandom(undefined, 10);

console.log(rad);
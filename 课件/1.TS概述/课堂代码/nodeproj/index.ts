function sum(a: number, b: number, c?: number) {
    if (c) {
        return a + b + c;
    } else {
        return a + b;
    }
}

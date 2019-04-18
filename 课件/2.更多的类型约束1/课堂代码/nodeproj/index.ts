function getTotal(a: number, b: number): number;
function getTotal(a: number, b: number, c: number): number;
function getTotal(a: string, b: string): string;
function getTotal(a: number | string, b: number | string, c?: number) {
    if (c) {
        return <number>a + <number>b + c;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return (a as string).toUpperCase() + (b as string).toUpperCase();
    }
}

getTotal(3, 4, 5);

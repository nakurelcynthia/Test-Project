const { add, subtract, multiply, divide } = require('./math');
test('adds two numbers', () => {
    expect(add(3, 2)).toBe(5);
    expect(add(-1, -1)).toBe(-2);
});
test('subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(10, 15)).toBe(-5);
});
test('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(0, 5)).toBe(0);
});
test('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
});
test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});
const calculator = require('./calculator');

describe('calculator', () => {
    describe('add functions', () => {
        test('add function 1', () => {
            expect(calculator.add(5,6)).toBe(11);
        })
    })
    describe('subtract functions', () => {
        test('subtract function', () => {
            expect(calculator.subtract(5,2)).toBe(3);
        })
    })
    describe('multiply funtions', () => {
        test('multiply function1', () => {
            expect(calculator.multiply(3,4)).toBe(12);
        })
    })
    describe('divide funtions', () => {
        test('divide function1', () => {
            expect(calculator.divide(6,2)).toBe(3);
        })
    })
})


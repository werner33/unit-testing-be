const divCount = require('../divCount');

describe('finds the number of integers between a and b divisible by k', () => {
    it('a is equal to b and not divisible by k', () => {
        expect(divCount(2, 2, 3)).toBe(0);
        expect(divCount(5,5,6)).toBe(0);
    }) 

    it('a is equal to b and divisible by k  ', () => {
        expect(divCount(2,2,2)).toBe(1);
        expect(divCount(6,6,6)).toBe(1);
    })

    it('a is less than b and a is divisible by k and b is not', () => {
        expect(divCount(5, 7, 5)).toBe(1);
        expect(divCount(2,9,2)).toBe(4);
    })

    it('a is less than b and neither are divisible by k', () => {
        expect(divCount(2, 10, 3)).toBe(3)
        expect(divCount(4, 12, 8)).toBe(1)

    })
});
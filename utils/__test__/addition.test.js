const sum = require('../addition');

describe("sum adds two integers together and returns the total", () => {

    it('adds two positive integers', () => {
        expect(sum(4,5)).toBe(9);
    })

    it('adds one positive, one negative number', () => {
        expect(sum(7, -8)).toBe(-1);
        expect(sum(100, -50)).toBe(50);
        expect(sum(12, -100)).toBe(-88);
    })

    it('adds two negative numbers ', () => {
        expect(sum(-1, -2)).toBe(-3);
        expect(sum(-10, -40)).toBe(-50);
    })

    it("adds two zeros", () => {
        expect(sum(0,0)).toBe(0);
    })
 
})

// CASES:

// two positive numbers 
// one positive, one negative number  
// two negative numbers 
// two 0s 


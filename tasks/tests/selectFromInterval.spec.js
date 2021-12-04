const selectFromInterval = require('../selectFromInterval');

describe('Equals interval', () => {
    it('max min intervals', () => {
        expect(selectFromInterval([1,3,5], 5, 2)).toEqual([3, 5]);
    })
    it('empty equals', () => {
        expect(selectFromInterval([-2, -15, 0, 4], -13, -5)).toEqual([]);
    })
    it('TypeError equals', () => {
        expect(selectFromInterval(['aaa'], 2, 3)).toThrowAnyError;
    })
});
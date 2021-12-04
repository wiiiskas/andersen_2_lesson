const makeObjectDeepCopy = require('../deepcopy');

const objects = [
    { one: 1, two: 2, three: 3 },
    { one: 1, two: { three: 3, four: 4 }, five: 5 },
    { one: { two: 2, 3: 'three' }, four: 4 },
    { one: 1, 2: [ {one: 1, two: 2}, 2, 3], four: 4 },
    { one: 1, two: [], three: 3 },
    { one: 1, two: function test() { console.log('hello') }, three: 3 },
];

describe('MakeObjectDeepCopy copy must return correct copy', () => {
    it('Objects not Equals', () => {
        for(object of objects) {
            const clone = makeObjectDeepCopy(object);
                expect(clone !== object).toBe(true);
           }
    })
    it('Object content Equals', () => {
        for(object of objects) {
            const cloneToJson = JSON.stringify(makeObjectDeepCopy(object));
            const objectToJson = JSON.stringify(object);
            expect(cloneToJson).toEqual(objectToJson);
           }
    })
});
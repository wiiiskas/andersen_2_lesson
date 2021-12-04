const myIterable = require('../myIterable');

const tryToIterate = (from, to) => {
    myIterable.from = from;
    myIterable.to = to;
    try{
        for(iterator of myIterable){ return console.log(iterator) }
    }catch(error){
        return new Error(error);
    }
}

describe('myIterable object, mast have iterator', () => {
    it('Should iterate correctly', () => {
        myIterable.from = 1;
        myIterable.to = 4;
        let i = 1;
        for(iterator of myIterable){
            expect(iterator).toEqual(i++);
        }
    })
    it('Min should be less then max', () => {
        expect(tryToIterate(4,2)).toThrowAnyError;
    })
    it('Should be throw error if "from" is not number', () => {
        expect(tryToIterate('not a number',40)).toThrowAnyError;
    })
    it('Should be throw error if "to" is not number', () => {
        expect(tryToIterate(1, 'not a number')).toThrowAnyError;
    })
})
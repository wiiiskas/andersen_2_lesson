const MESSAGES = require('./messages');

const selectFromInterval = (array, firstValue, secondValue) => {
    try{
        if(!array.length  || array.some(value => typeof value === 'string' || !Number.isInteger(value)))
                { return new TypeError(MESSAGES.arrayMustBeACorrect) }
            const [ min, max ] = [firstValue, secondValue].sort((a, b) => a - b);
            const initialArray = [];
            array.reduce((acc, val) => (val >= min && val <= max) && initialArray.push(val), []);
            return initialArray;
    }catch(error) {
        return new Error(error.message);
    }
}

module.exports = selectFromInterval;
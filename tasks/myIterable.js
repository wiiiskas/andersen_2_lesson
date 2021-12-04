const MESSAGES = require('./messages');

const myIterable = {};

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

myIterable[Symbol.iterator] = function() {
    try{
        if( !Number.isInteger(this.from) || !Number.isInteger(this.to) ) {
            throw new ValidationError(MESSAGES.mustBeANumber);
        }
        if( this.from > this.to) {
           throw  new ValidationError(MESSAGES.minMaxError);
        }
        const current = this.from;
        const end = this.to;
        return {
            current,
            end,
            next(){
                return this.current <= this.end?  { value: this.current++, done: false } : { done: true }
                }
        }
    }catch(error){
       throw new Error(error);
    }
}

module.exports = myIterable;

function makeObjectDeepCopy(obj) {
    if(obj === null) return null;
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach( 
        key => ( clone[key] = typeof obj[key] === 'object' ? makeObjectDeepCopy(obj[key]): obj[key] )
    );
    return Array.isArray(obj) ? Array.from(obj) : clone;
}

module.exports = makeObjectDeepCopy;


const selectFromInterval = require('./tasks/selectFromInterval');
const myIterable = require('./tasks/myIterable');
const deepCopy = require('./tasks/deepcopy');

const objects = [
    { one: 1, two: 2, three: 3 },
    { one: 1, two: { three: 3, four: 4 }, five: 5 },
    { one: { two: 2, 3: 'three' }, four: 4 },
    { one: 1, 2: [ {one: 1, two: 2}, 2, 3], four: 4 },
    { one: 1, two: [], three: 3 },
    { one: 1, two: function test() { console.log('hello') }, three: 3 },
];

// deep Copy;
console.log('==== DEEP COPY ====');
objects.forEach((obj) => console.log(deepCopy(obj)));

//myIterable
console.log('==== myIterable ====');
myIterable.from = 1;
myIterable.to = 4;
for(iterator of myIterable){
    console.log(iterator);
}

//selectFromInterval
console.log('=== selectFromInterval ====');

const intervals = [
    [[1,3,5], 5, 2],
    [[-2, -15, 0, 4], -13, -5],
]

intervals.forEach((interval, index) => {
    console.log('задан:', ...interval);
    console.log('результат:', selectFromInterval(intervals[index][0], intervals[index][1], intervals[index][2]));
});









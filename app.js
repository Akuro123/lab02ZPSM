const _ = require('lodash');

const numbers = [10, 20, 30, 40, 50];
const meanValue = _.mean(numbers);
const minValue=_.min(numbers);
const maxValue=_.max(numbers);

console.log("Srednia: "+meanValue);
console.log("Min: "+minValue);
console.log("MAX: "+maxValue);


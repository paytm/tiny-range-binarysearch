
var assert = require('assert');
var binarySearch = require('./index.js');

var arr = [-1, 0, 1, [3, 7]];

console.log("array - ", arr);
console.log("binarySearch(arr, 0) - ", binarySearch(arr, 0));
console.log("binarySearch(arr, 5) - ", binarySearch(arr, 5));
console.log("binarySearch(arr, 9) - ", binarySearch(arr, 9));

assert.equal(binarySearch(arr, 0), true);
assert.equal(binarySearch(arr, 5), true);
assert.equal(binarySearch(arr, 9), false);

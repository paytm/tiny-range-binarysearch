
var assert = require('assert');
var binarySearch = require('./index.js');

var arr = [-1, 0, 1, [3, 7], [9, 13], 19, [30, 40]];

console.log("array - ", arr);
console.log("binarySearch(arr, 0) - ", binarySearch(arr, 0));
console.log("binarySearch(arr, 5) - ", binarySearch(arr, 5));
console.log("binarySearch(arr, 9) - ", binarySearch(arr, 9));
console.log("binarySearch(arr, 14) - ", binarySearch(arr, 14));
console.log("binarySearch(arr, 15) - ", binarySearch(arr, 15));
console.log("binarySearch(arr, 29) - ", binarySearch(arr, 29));

assert.equal(binarySearch(arr, 0).neighbour, 0);
assert.equal(binarySearch(arr, 5).neighbour, 5);
assert.equal(binarySearch(arr, 9).neighbour, 9);
assert.equal(binarySearch(arr, 14).neighbour, 13);
assert.equal(binarySearch(arr, 15).neighbour, 13);
assert.equal(binarySearch(arr, 29).neighbour, 30);

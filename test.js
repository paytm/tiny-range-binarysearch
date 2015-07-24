
var assert = require('assert');
var binarySearch = require('./index.js');

var arr = [-1, 0, 1, [3, 7]];

assert.equal(binarySearch.binarySearch(arr, 0), true);
assert.equal(binarySearch.binarySearch(arr, 5), true);
assert.equal(binarySearch.binarySearch(arr, 9), false);

var assert = require('assert');
var binarySearch = require('./index.js');

var arr = [-1, 0, 1, [3, 7], [9, 13], 19, [30, 40]];

console.log("array - ", arr);
console.log("binarySearch(arr, 0) - ", binarySearch.binarySearch(arr, 0));
console.log("binarySearch(arr, 5) - ", binarySearch.binarySearch(arr, 5));
console.log("binarySearch(arr, 9) - ", binarySearch.binarySearch(arr, 9));
console.log("nearestNeighbours(arr,0)  - ",binarySearch.nearestNeighbours(arr,0));
console.log("nearestNeighbours(arr,5)  - ",binarySearch.nearestNeighbours(arr,5));
console.log("nearestNeighbours(arr,3)  - ",binarySearch.nearestNeighbours(arr,3));
console.log("nearestNeighbours(arr,7)  - ",binarySearch.nearestNeighbours(arr,7));
console.log("nearestNeighbours(arr,-1) - ",binarySearch.nearestNeighbours(arr,-1));



assert.equal(binarySearch.binarySearch(arr, 0), true);
assert.equal(binarySearch.binarySearch(arr, 5), true);
assert.equal(binarySearch.binarySearch(arr, 29), false);
assert.equal(binarySearch.nearestNeighbours(arr, 9).leftNeighbour,7);
assert.equal(binarySearch.nearestNeighbours(arr, 9).rightNeighbour,10);

//begin
assert.equal(binarySearch.nearestNeighbours(arr, -1).leftNeighbour,null);
assert.equal(binarySearch.nearestNeighbours(arr, -1).rightNeighbour,0);

//left of begin
assert.equal(binarySearch.nearestNeighbours(arr, -2).leftNeighbour,null);
assert.equal(binarySearch.nearestNeighbours(arr, -2).rightNeighbour,-1);

//end
assert.equal(binarySearch.nearestNeighbours(arr, 40).leftNeighbour,39);
assert.equal(binarySearch.nearestNeighbours(arr, 40).rightNeighbour,null);

//right of end
assert.equal(binarySearch.nearestNeighbours(arr, 41).leftNeighbour,40);
assert.equal(binarySearch.nearestNeighbours(arr, 41).rightNeighbour,null);




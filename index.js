/*jshint multistr: true ,node: true*/
"use strict";

var me = {
    binarySearch : function (arr, no, begin, end){
        if(begin===undefined) begin = 0;
        if(end===undefined) end = arr.length - 1;
        if (arr[begin] === undefined || arr[end]===undefined) return false;

        if(end >= begin) {
            var mid = Math.ceil((begin + end)/2);
            if(!Array.isArray(arr[mid])) {
            
                if(arr[mid]==no)  return true;
                else {
                    if(no > arr[mid]) {
                        begin = mid +1;
                        return me.binarySearch(arr,no,begin,end);
                    } else {
                        end = mid-1;
                        return me.binarySearch(arr,no,begin,end);
                    }
                }
            } else {
                if(no >= arr[mid][0] && arr[mid][1] >= no) return true; 
                else {
                    if(no < arr[mid][0]) {
                        end = mid-1;
                        return me.binarySearch(arr,no,begin,end);
                    } else {
                        begin = mid +1;
                        return me.binarySearch(arr,no,begin,end);           
                    }
                }
            }
        } else  return false;
    }
};

module.exports = me.binarySearch;

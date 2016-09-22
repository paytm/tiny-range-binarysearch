/*jshint multistr: true ,node: true*/
"use strict";

var me = {
    binarySearch : function (arr, no, begin, end){
        if(begin===undefined) begin = 0;
        if(end===undefined) end = arr.length - 1;
        if (arr[begin] === undefined || arr[end]===undefined) { 
            if (begin > end) {
                if(arr[end]!==undefined) {
                    // Fallen off the largest end of the array
                    return {
                        'foundMatch': false,
                        'neighbour': Array.isArray(arr[end]) ? arr[end][1] : arr[end]
                    };
                }
                else if (arr[begin]!==undefined) {
                    // Fallen off the smallest end of the array
                    return {
                        'foundMatch': false,
                        'neighbour': Array.isArray(arr[begin]) ? arr[begin][0] : arr[begin]
                    };
                }
            }
            else {
                // Ideally, we should never be reaching here.
                // If we did, something's really really wrong.
                console.error(' begin < end, but arr[begin] or arr[end] is undefined, for begin: ', begin, ' end: ', end, ' arr: ', arr);
            }
        }

        if(end >= begin) {
            var mid = Math.ceil((begin + end)/2);
            if(!Array.isArray(arr[mid])) {
            
                if(arr[mid]==no)  return {'foundMatch': true, 'neighbour': no};
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
                if(no >= arr[mid][0] && arr[mid][1] >= no) return { 'foundMatch': true, 'neighbour': no}; 
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
        } else {
            /*
                More interesting corner cases.
                arr[begin], arr[end], are both well defined, but
                begin > end. This means, we are still within the arr, 
                we haven't fallen off yet, but we have not found no either.

                Calculate distances to either side, and return minimum.
            */
            var 
                beginCandidate,
                endCandidate,
                beginDist, 
                endDist;

            if (Array.isArray(arr[begin])) {
                if (no < arr[begin][0]) {
                    beginCandidate = arr[begin][0];
                } else {
                    // quite obvious, that arr[begin][1] < no
                    beginCandidate = arr[begin][1];
                }
            } else {
                beginCandidate = arr[begin];
            }

            if (Array.isArray(arr[end])) {
                if (no < arr[end][0]) {
                    endCandidate = arr[end][0];
                } else {
                    // quite obvious, that arr[end][1] < no
                    endCandidate = arr[end][1];
                }
            } else {
                endCandidate = arr[end];
            }

            beginDist = Math.abs(no - beginCandidate);
            endDist = Math.abs(no - endCandidate);

            return {
                'foundMatch' : false,
                'neighbour' : (beginDist < endDist) ? beginCandidate : endCandidate
            };
        }
    }
};

module.exports = me.binarySearch;

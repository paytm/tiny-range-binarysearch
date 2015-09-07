/*jshint multistr: true ,node: true*/
"use strict";

var me = {

    _binarySearch : function (arr, no, begin, end){

        var 
            leftNeighbour    = null,
            rightNeighbour   = null;

            if(begin===undefined) begin = 0;
            if(end===undefined) end = arr.length - 1;
            
            if (arr[begin] === undefined || arr[end]===undefined) { 
                if (begin > end) {


                    if(arr[end]!==undefined) {
                        // Fallen off the largest end of the array
                        leftNeighbour = Array.isArray(arr[end]) ? arr[end][1] : arr[end];

                        return  {
                            'foundMatch'       : false,
                            'nearestNeighbour' : Array.isArray(arr[end]) ? arr[end][1] : arr[end],
                            'leftNeighbour'    : leftNeighbour,
                            'rightNeighbour'   : rightNeighbour
                        };

                        
                    }
                    else if (arr[begin]!==undefined) {
                        // Fallen off the smallest end of the array
                        rightNeighbour = Array.isArray(arr[begin]) ? arr[begin][0] : arr[begin];
                        return {
                            'foundMatch'       : false,
                            'nearestNeighbour' : Array.isArray(arr[begin]) ? arr[begin][0] : arr[begin],
                            'leftNeighbour'    : leftNeighbour,
                            'rightNeighbour'   : rightNeighbour
                        };

                        
                    }
                }
                else {
                    // Ideally, we should never be reaching here.
                    // If we did, something's really really wrong.
                    console.error(' begin < end, but arr[begin] or arr[end] is undefined, for begin: '+ begin + ' end: ' + end + ' arr: ' + arr);
                    
                }
            }

            if(end >= begin) {
                var mid = Math.ceil((begin + end)/2);
                if(!Array.isArray(arr[mid])) {
                
                    if(arr[mid]==no){

                        if(arr[mid-1]!==undefined){
                            if(Array.isArray(arr[mid-1])){
                                leftNeighbour = arr[mid-1][1];
                            } else{
                                leftNeighbour = arr[mid-1];
                            }
                        }

                        if(arr[mid+1]!==undefined){
                            if(Array.isArray(arr[mid+1])){
                                rightNeighbour = arr[mid+1][0];
                            } else{
                                rightNeighbour = arr[mid+1];
                            }
                        }



                        return {
                            'foundMatch'       : true,
                            'nearestNeighbour' : no,
                            'leftNeighbour'    : leftNeighbour,
                            'rightNeighbour'   : rightNeighbour
                        };                    
                    } 
                     else {
                        if(no > arr[mid]) {
                            begin = mid +1;
                            return me._binarySearch(arr,no,begin,end);
                        } else {
                            end = mid-1;
                            return me._binarySearch(arr,no,begin,end);
                        }
                    }
                } else {
                    if(no >= arr[mid][0] && arr[mid][1] >= no){
                       
                        if(no==arr[mid][0]){

                            rightNeighbour = no+1;

                            if(arr[mid-1]!==undefined){
                                if(Array.isArray(arr[mid-1])){
                                    leftNeighbour = arr[mid-1][1];
                                } else{
                                    leftNeighbour = arr[mid-1];
                                }
                            }

                        } else{

                            if(no==arr[mid][1]){

                                leftNeighbour = no-1;

                                if(arr[mid+1]!==undefined){
                                    if(Array.isArray(arr[mid+1])){
                                        rightNeighbour = arr[mid+1][0];
                                    } else{
                                        rightNeighbour = arr[mid+1];
                                    }
                                }

                            } else{

                                leftNeighbour  = no-1;
                                rightNeighbour = no+1;

                            }
                        }



                        return {
                            'foundMatch'       : true,
                            'nearestNeighbour' : no,
                            'leftNeighbour'    : leftNeighbour,
                            'rightNeighbour'   : rightNeighbour
                        };
                    } 
                    else {
                        if(no < arr[mid][0]) {
                            end = mid-1;
                            return me._binarySearch(arr,no,begin,end);
                        } else {
                            begin = mid +1;
                            return me._binarySearch(arr,no,begin,end);           
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

                leftNeighbour  = beginCandidate;
                rightNeighbour = endCandidate;

                return {
                    'foundMatch'       : false,
                    'nearestNeighbour' : (beginDist < endDist) ? beginCandidate : endCandidate,
                    'leftNeighbour'    : leftNeighbour,
                    'rightNeighbour'   : rightNeighbour
                };
            
            }
    },

    binarySearch  : function (arr, no, begin, end){
        var binarySearchResponse = me._binarySearch(arr, no, begin, end);
        return binarySearchResponse.foundMatch;
    },

    nearestNeighbours : function (arr, no, begin, end){
        var 
            binarySearchResponse   = me._binarySearch(arr, no, begin, end),
            neighbours             = {
                "leftNeighbour"    :  binarySearchResponse.leftNeighbour,
                "rightNeighbour"   :  binarySearchResponse.rightNeighbour,
                "nearestNeighbour" :  binarySearchResponse.nearestNeighbour
            };

        return neighbours;
    },
};

module.exports = me;
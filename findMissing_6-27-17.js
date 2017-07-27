/*
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers.
You are provided with consecutive elements of an Arithmetic Progression.
There is however one hitch: Exactly one term from the original series is missing from the set of numbers which have been given to you.
The rest of the given series is the same as the original AP. Find the missing term.

You have to write the function findMissing (list) , list will always be atleast 3 numbers. The missing term will never be the first or last one.

Example :
findMissing([1,3,5,9,11]) == 7
*/

const l = console.log;

var findMissing = function (list) {

    let delta;
    let i=0;
    
    while (i <= 1) {
        if (delta !== undefined) {
            delta = Math.min (delta, list[i+1] - list[i])
            break
        }
        delta = list[i+1] - list[i];
        i++;
    }

    

}

l(findMissing([1,3,5,9,11]))    // --> 7
l(findMissing([3,4,6]))         // --> 5
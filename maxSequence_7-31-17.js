/**
 * 
 * The maximum sum subarray problem consists in finding the maximum sum of
 * a contiguous subsequence in an array or list of integers:
 * 
 * maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 * should be 6: [4, -1, 2, 1]
 * 
 * Easy case is when the list is made up of only positive numbers and
 * the maximum sum is the sum of the whole array. If the list is made
 * up of only negative numbers, return 0 instead.
 * 
 * Empty list is considered to have zero greatest sum. Note that the
 * empty list or array is also a valid sublist/subarray.
 * 
 */

const l = console.log

// const maxSequence = (arr) => {
//     if (arr.length === 0) return 0;
//     let maxSum = -Infinity;
//     for (let i=0 ; i<arr.length ; i++) {
//         for (let j=i ; j<arr.length ; j++) {
//             // l('i --> ',i, 'j --> ', j,  'arr.slice(i,j+1) --> ', arr.slice(i,j+1))
//             maxSum = Math.max(arrSum(arr.slice(i,j+1)) , maxSum) 
//         }
//     }
//     return maxSum;
// }

// const arrSum = (arr) => arr.reduce ((a, v)=> a+v , 0)


// codewars top solution:

var maxSequence = function (arr) {
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; i++) {
        l('i -->', i , 'min -->' , min , 'ans -->' , ans , 'sum -->' , sum)
        sum += arr[i];
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);
    }
    return ans;
}



l('6 --> ', maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// l('0 --> ', maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]))
// l('0 --> ', maxSequence([]))


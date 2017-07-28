/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

const l = console.log

const sortArray = (array) => {
  const odds = [];
  const newArr = array.slice(0)
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) odds.push(array[i])
  }
  odds.sort((a, b) => a-b)
  // l('odds --> ', odds)
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) newArr[i] = odds.shift();
  }
  return newArr
}

l('[1, 3, 2, 8, 5, 4] --> ', sortArray([5, 3, 2, 8, 1, 4]))



/*
Top codewars solution:
*/

// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }

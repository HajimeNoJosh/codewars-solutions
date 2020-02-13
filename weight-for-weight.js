/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.
https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
*/

function orderWeight(strng) {
  if (strng.length === 0) {
    return ''
  } else {
    const weightInitialArray = strng.split(' ')
    const sortable = []
    const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue)
    const reducerForFinal = (accumulator, currentValue) => accumulator + currentValue.num + ' '

    for (let i = 0; i < weightInitialArray.length; i++) {
      const weightObj = {}
      weightObj.num = weightInitialArray[i]
      weightObj.sum = weightInitialArray[i].split('').reduce(reducer, 0)
      sortable.push(weightObj)
    }

    sortable.sort(function(a, b) {
      if (a.sum === b.sum) {
        return  a.num.localeCompare(b.num)
      } else {
        return a.sum - b.sum
      }
    })

     return sortable.reduce(reducerForFinal, '').trim()
   }
}

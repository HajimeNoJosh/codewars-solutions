/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

*[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]*
https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
*/


function tribonacci(signature,n){
/*
For the case tribonacci([1,1,1],10)
We would set finalArray = []
arrayToLoop = [1,1,1]
For the first loop
finalArray = [1,1,1] start
numToAdd = 3
arrayToLoop = [1,1,3] end
finalArray = [1,1,1,3] end
For the second loop
finalArray = [1,1,1,3] start
numToAdd = 5
arrayToLoop = [1,3,5] end
finalArray = [1,1,1,3,5] end
so forth till it reaches i = 0 from 7 as that is n - 3
*/
  if (n > 3) {
    // set an array for the final values
    const finalArray = []
    const arrayToLoop = signature
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // Loop starting 3 less than the n value as we have already accounted for the first 3 numbers
    for (let i = n - 3; i > 0; i--) {
      if (i === n - 3) {
      // push into the final array the initial 3 values
        finalArray.push(arrayToLoop[0])
        finalArray.push(arrayToLoop[1])
        finalArray.push(arrayToLoop[2])
      }
      // Num to add is the reduced value of the 3 numbers in arrayToLoop
      numToAdd = arrayToLoop.reduce(reducer)
      // Take away the first value
      arrayToLoop.shift()
      // Add on that reduced value to both the reduced array and the final array
      arrayToLoop.push(numToAdd)
      finalArray.push(numToAdd)
    }
    // return the final array when I finish the loop
      return finalArray
      // Account for edge cases where n is not greater than 3
    } else if (n === 3) {
      return signature
    } else if (n === 2) {
      signature.pop()
      return signature
    } else if (n === 1) {
      return [signature[0]]
    } else if (n === 0) {
      return []
    }
  }

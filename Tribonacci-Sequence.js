function tribonacci(signature,n){
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

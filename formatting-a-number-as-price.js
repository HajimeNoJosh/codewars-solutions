const numberToPrice = function(number) {
  const leftOfDot = []
  const rightOfDot = []
  const numberArray = number.toString().split('')
    if (typeof number === 'number') {
      if (numberArray.includes('.')) {
      const indexOfDot = numberArray.indexOf('.')
      let howManyIterations = 0
        for (let i = indexOfDot - 1; i >= 0; i--) {
          if (howManyIterations % 3 === 0 && howManyIterations !== 0 && numberArray[i] !== '-') {
            leftOfDot.push(',')
            leftOfDot.push(numberArray[i])
          } else {
            leftOfDot.push(numberArray[i])
          }
          howManyIterations++
        }
        leftOfDot.reverse()
        howManyIterations = 0
        for (let j = indexOfDot; j < numberArray.length; j++) {
          if (howManyIterations <= 2) {
            rightOfDot.push(numberArray[j])
          }
          howManyIterations++
        }
        if (rightOfDot.length === 2) {
          rightOfDot.push('0')
        }
      } else if (number < 10 && number > -10) {
        return number.toString() + '.00'
      } else {
        for (let k = 0; k < numberArray.length; k++) {
          if (k % 3 === 0 && k !== 0 && numberArray[k] !== '-') {
            leftOfDot.push(',')
            leftOfDot.push(numberArray[k])
          } else {
            leftOfDot.push(numberArray[k])
          }
        }
        return leftOfDot.join('') + '.00'
      }
    } else {
      return 'NaN'
    }
    return leftOfDot.join('') + rightOfDot.join('')
}

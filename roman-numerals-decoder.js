/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Courtesy of rosettacode.org
*/

function solution(roman){
  const romanObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  const reducerAdd = (accumulator, currentValue) => accumulator + currentValue
  const reducedNumber = []
  const inLimbo = []
  const convertStringArray = roman.split('')

  for (let i = 0; i < convertStringArray.length; i++) {
    reducedNumber.push(romanObj[convertStringArray[i]])
  }

  for (let i = 0; i < reducedNumber.length; i++) {
    if (reducedNumber[i] < reducedNumber[i + 1]) {
      inLimbo.push(Math.abs(reducedNumber[i] - reducedNumber[i + 1]))
      reducedNumber.splice(i, 2, 0)
    }
  }

  reducedNumber.push(inLimbo.reduce(reducerAdd, 0))
  return reducedNumber.reduce(reducerAdd, 0)
}

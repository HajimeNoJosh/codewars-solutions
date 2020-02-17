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

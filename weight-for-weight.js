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

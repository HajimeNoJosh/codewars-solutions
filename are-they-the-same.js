function comp(array1, array2){
  if (!array1 || !array2) return false

  return JSON.stringify(array1.map(x => x * x).sort()) === JSON.stringify(array2.sort())
}

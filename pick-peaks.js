function pickPeaks(arr){

  const finalObj = {
    pos: [],
    peaks: []
  }

  let tempPeak

  let tempPos

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      tempPeak = arr[i]
      tempPos = i
    } else if (tempPeak !== null && tempPeak > arr[i]) {
      finalObj.peaks.push(tempPeak)
      finalObj.pos.push(tempPos)
      tempPeak = null
      tempPos = null
    } else if (tempPeak === arr[i]) {
      continue
    }
  }
 return finalObj
}

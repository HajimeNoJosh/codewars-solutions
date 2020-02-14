function humanReadable(seconds) {
 const timeObj = {
   'hh': 0,
   'mm': 0,
   'ss': 0
  }

  const finalArray = []

  if (seconds === 0) {
    return '00:00:00'
  }

  for (let i = 1; i <= seconds; i++) {
    if (timeObj['ss'] < 59) {
        timeObj['ss']+=1
      } else {
        timeObj['ss'] = 0
          if (timeObj['mm'] < 59) {
          timeObj['mm']+=1
          } else {
          timeObj['mm'] = 0
          timeObj['hh'] += 1
          }
        }
    }

    if (timeObj['ss'] < 10) {
      finalArray.unshift(':0' + timeObj['ss'])
    } else {
      finalArray.unshift(':' + timeObj['ss'])
    }
    if (timeObj['mm'] < 10) {
      finalArray.unshift(':0' + timeObj['mm'])
    } else {
      finalArray.unshift(':' + timeObj['mm'])
      }
    if (timeObj['hh'] < 10) {
      finalArray.unshift('0' + timeObj['hh'])
    } else {
      finalArray.unshift('' + timeObj['hh'])
    }

   return finalArray.join('')
}

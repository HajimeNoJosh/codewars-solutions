function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let newStringArray = []
  // make string into array that is consitent case and is sorted
  let stringArray = string.toLowerCase().split("").sort()
  // loop through stringArray and get rid of any repeat characters
  // Push into a newString any non repeated characters
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] !== stringArray[i - 1]) {
            newStringArray.push(stringArray[i])
        }
    }x
  // Remake the array into a string and replace any not alphanumeric characters
  // check if it equals my alphabet string return true if it does else return false
  return newStringArray.join('').replace(/[^A-Za-z]/g, '') === alphabet
}

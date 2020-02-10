/*
A pangram is a sentence that contains every single letter of the alphabet at
least once. For example, the sentence "The quick brown fox jumps over the lazy dog"
 is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is,
False if not. Ignore numbers and punctuation.
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
*/

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
    }
  // Remake the array into a string and replace any not alphanumeric characters
  // check if it equals my alphabet string return true if it does else return false
  return newStringArray.join('').replace(/[^A-Za-z]/g, '') === alphabet
}

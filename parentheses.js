/*
Write a function called that takes a string of parentheses, and determines if
the order of the parentheses is valid. The function should return true if the
string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
*/


function validParentheses(parens){
   parensObj = {
     open: 0,
     close: 0
   }

   for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      parensObj.open += 1
    } else if (parens[i] === ')') {
       parensObj.close += 1
         if (parensObj.close > parensObj.open) {
           return false
         }
       }
     }

   if (parensObj.open === parensObj.close) {
   return true
   } else {
   return false
   }
}

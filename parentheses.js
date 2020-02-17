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

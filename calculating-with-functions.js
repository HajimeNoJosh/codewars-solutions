function calculate(operation, leftOperand) {
  if (operation) {
   const operationType = operation[0]
   const rightOperand = parseInt(operation[1])

    if (operationType === '+') {
      return leftOperand + rightOperand
    } else if (operationType === '-') {
      return leftOperand - rightOperand
    } else if (operationType === '/') {
      return Math.floor(leftOperand / rightOperand)
    } else if (operationType === '*') {
      return leftOperand * rightOperand
    }
  } else {
    return leftOperand
    }
}

function zero(operation) {
  return calculate(operation, 0)
}

function one(operation) {
  return calculate(operation, 1)
}
function two(operation) {
  return calculate(operation, 2)
}

function three(operation) {
  return calculate(operation, 3)
}
function four(operation) {
  return calculate(operation, 4)
}
function five(operation) {
  return calculate(operation, 5)
}
function six(operation) {
  return calculate(operation, 6)
}
function seven(operation) {
  return calculate(operation, 7)
}
function eight(operation) {
 return calculate(operation, 8)
}
function nine(operation) {
  return calculate(operation, 9)
}

function plus(operand) {
  return '+' + operand
}
function minus(operand) {
  return '-' + operand
}
function times(operand) {
  return '*' + operand
}
function dividedBy(operand) {
  return '/' + operand
}

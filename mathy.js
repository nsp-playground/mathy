// add
function add(a, b) {
  return a + b;
}

// subtract
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by 0');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

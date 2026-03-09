#!/usr/bin/env node

/**
 * Basic calculator operations supported by this CLI:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function parseNumbers(rawValues) {
  if (rawValues.length < 2) {
    throw new Error("Please provide at least two numeric operands.");
  }

  const numbers = rawValues.map((value) => Number(value));
  if (numbers.some((value) => Number.isNaN(value))) {
    throw new Error("All operands must be valid numbers.");
  }

  return numbers;
}

function runCli(argv) {
  const [operation, ...rawOperands] = argv;

  if (!operation) {
    throw new Error(
      "Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2> [num3 ...]"
    );
  }

  const operands = parseNumbers(rawOperands);
  let result;

  switch (operation) {
    case "add":
      result = operands.reduce((sum, value) => add(sum, value), 0);
      break;
    case "subtract":
      result = operands.slice(1).reduce((acc, value) => subtract(acc, value), operands[0]);
      break;
    case "multiply":
      result = operands.reduce((product, value) => multiply(product, value), 1);
      break;
    case "divide":
      result = operands.slice(1).reduce((acc, value) => divide(acc, value), operands[0]);
      break;
    default:
      throw new Error(
        "Unsupported operation. Use one of: add, subtract, multiply, divide."
      );
  }

  console.log(result);
}

if (require.main === module) {
  try {
    runCli(process.argv.slice(2));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  runCli,
};

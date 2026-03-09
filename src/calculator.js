#!/usr/bin/env node

/**
 * Basic calculator operations supported by this CLI:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - exponentiation
 * - square root
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

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

function exponentiate(a, b) {
  return Math.pow(a, b);
}

function sqrt(a) {
  if (a < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(a);
}

function parseNumbers(rawValues, minCount = 2) {
  if (rawValues.length < minCount) {
    throw new Error(`Please provide at least ${minCount} numeric operand${minCount === 1 ? "" : "s"}.`);
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
      "Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|exponentiate|sqrt> <num1> [num2 ...]"
    );
  }

  let operands;
  let result;

  switch (operation) {
    case "add":
      operands = parseNumbers(rawOperands);
      result = operands.reduce((sum, value) => add(sum, value), 0);
      break;
    case "subtract":
      operands = parseNumbers(rawOperands);
      result = operands.slice(1).reduce((acc, value) => subtract(acc, value), operands[0]);
      break;
    case "multiply":
      operands = parseNumbers(rawOperands);
      result = operands.reduce((product, value) => multiply(product, value), 1);
      break;
    case "divide":
      operands = parseNumbers(rawOperands);
      result = operands.slice(1).reduce((acc, value) => divide(acc, value), operands[0]);
      break;
    case "modulo":
      operands = parseNumbers(rawOperands);
      result = operands.slice(1).reduce((acc, value) => modulo(acc, value), operands[0]);
      break;
    case "exponentiate":
      operands = parseNumbers(rawOperands);
      result = operands.slice(1).reduce((acc, value) => exponentiate(acc, value), operands[0]);
      break;
    case "sqrt":
      operands = parseNumbers(rawOperands, 1);
      result = sqrt(operands[0]);
      break;
    default:
      throw new Error(
        "Unsupported operation. Use one of: add, subtract, multiply, divide, modulo, exponentiate, sqrt."
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
  modulo,
  exponentiate,
  sqrt,
  runCli,
};

const { add, subtract, multiply, divide, modulo, exponentiate, sqrt } = require("../calculator");

describe("calculator basic operations", () => {
  describe("addition", () => {
    test("adds two numbers", () => {
      expect(add(5, 3)).toBe(8);
    });

    test("adds negative and positive numbers", () => {
      expect(add(-2, 7)).toBe(5);
    });
  });

  describe("subtraction", () => {
    test("subtracts two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test("returns negative result when subtracting larger value", () => {
      expect(subtract(4, 10)).toBe(-6);
    });
  });

  describe("multiplication", () => {
    test("multiplies two numbers", () => {
      expect(multiply(6, 7)).toBe(42);
    });

    test("returns zero when multiplying by zero", () => {
      expect(multiply(45, 0)).toBe(0);
    });
  });

  describe("division", () => {
    test("divides two numbers", () => {
      expect(divide(20, 4)).toBe(5);
    });

    test("handles decimal results", () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test("throws on division by zero", () => {
      expect(() => divide(5, 0)).toThrow("Division by zero is not allowed.");
    });
  });

  describe("modulo", () => {
    test("returns remainder of two numbers", () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test("returns zero when evenly divisible", () => {
      expect(modulo(9, 3)).toBe(0);
    });

    test("throws on modulo by zero", () => {
      expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed.");
    });
  });

  describe("exponentiation", () => {
    test("raises a number to a power", () => {
      expect(exponentiate(2, 10)).toBe(1024);
    });

    test("returns 1 when exponent is 0", () => {
      expect(exponentiate(5, 0)).toBe(1);
    });

    test("handles fractional exponents", () => {
      expect(exponentiate(4, 0.5)).toBe(2);
    });
  });

  describe("square root", () => {
    test("returns square root of a perfect square", () => {
      expect(sqrt(16)).toBe(4);
    });

    test("returns square root of a non-perfect square", () => {
      expect(sqrt(2)).toBeCloseTo(1.4142135623730951);
    });

    test("returns 0 for sqrt(0)", () => {
      expect(sqrt(0)).toBe(0);
    });

    test("throws on square root of a negative number", () => {
      expect(() => sqrt(-1)).toThrow("Square root of a negative number is not allowed.");
    });
  });
});

describe("image example operations", () => {
  test("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("20 / 5 = 4", () => {
    expect(divide(20, 5)).toBe(4);
  });
});

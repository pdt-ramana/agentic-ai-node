const { add, subtract, multiply, divide } = require("../calculator");

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

import { randomNumber, calculatePercentage, getStatColor } from "./utils";
import { describe, it, expect } from "vitest";

describe("randomNumber function", () => {
  it("should generate a whole number", () => {
    const result = randomNumber(1, 1);
    expect(result).toBe(1);
  });

  it("Should work with large numbers", () => {
    const result = randomNumber(10000000, 10000000);
    expect(result).toBe(10000000);
  });

  it("Should round decimals down", () => {
    const result = randomNumber(0.99, 0.1);
    expect(result).toBe(0);
  });

  it("Should work with negatives", () => {
    const result = randomNumber(-1, -1);
    expect(result).toBe(-1);
  });
});

describe("calculatePercentage function", () => {
  it("should return no less that 0", () => {
    const result = calculatePercentage(1, 100);
    expect(result).toBe(1);
  });

  it("should return 100 on duplicate inputs", () => {
    const result = calculatePercentage(100, 100);
    expect(result).toBe(100);
  });

  it("should return with decimals", () => {
    const result = calculatePercentage(1, 1000);
    expect(result).toBe(0.1);
  });

  it("should return long decimals", () => {
    const result = calculatePercentage(1, 10000000);
    expect(result).toBeCloseTo(0.00001);
  });
});

describe("getStatColor", () => {
  it("should return a string from a number", () => {
    const result = getStatColor(1000);
    expect(result).toBe("cyan");
  });

  it("should return cyan if not a number", () => {
    const result = getStatColor("wrong");
    expect(result).toBe("cyan");
  });

  it("should return red if negative", () => {
    const result = getStatColor(-199);
    expect(result).toBe("red");
  });

  it("should return a string even with decimals", () => {
    const result = getStatColor(102.5);
    expect(result).toBe("yellow");
  });
});

const func1 = require("./1.js");
const func2 = require("./2.js");
const func3 = require("./3.js");

test("getSum should return sum of elements", () => {
	expect(func1([1, 2, 3])).toBe(6);
	expect(func1([0, 0, 0, 0, 0])).toEqual(0);
	expect(func1([13, 10, 7])).toBeLessThan(31);
	expect(func1([2, 2, 2])).toBeGreaterThan(5);
	expect(func1([-3, 1, 2])).toBe(0);
	expect(func1([-10, -5, -5])).toBe(-20);
});

test("arithmetic should return the result of an arithmetic operation", () => {
	expect(func2(1, 2, "add")).toBe(3);
	expect(func2(1, 2, "subtract")).toEqual(-1);
	expect(func2(1, 2, "multiply")).not.toBe(3);
	expect(func2(1, 2, "divide")).toBeCloseTo(0.5);
	expect(func2(1, 2, "")).toBe("No such result");
});

test("checkNumber should check if the number is even", () => {
	expect(func3(1)).toBeFalsy();
	expect(func3(0)).toBeTruthy();
	expect(func3(10)).not.toBeFalsy();
	expect(func3(-5)).toBeFalsy();
	expect(func3(-20)).toBeTruthy();
});

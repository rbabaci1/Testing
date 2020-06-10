const helpers = require("./project-1");

describe("project one helpers", () => {
  describe("multiplyByTen()", () => {
    it("multiplies a number by 10", () => {
      expect(helpers.multiplyByTen(3)).toEqual(30);
    });
  });

  describe("subtractFive()", () => {
    it("subtracts 5 from a number", () => {
      expect(helpers.subtractFive(5)).toEqual(0);
    });
  });

  describe("areSameLength()", () => {
    it("checks if two strings have same length", () => {
      expect(helpers.areSameLength("rabah", "hello")).toBeTruthy();
      expect(helpers.areSameLength("rabah", "hell")).toBeFalsy();
    });
  });

  describe("areEqual()", () => {
    it("checks if two numbers are equal", () => {
      expect(helpers.areEqual(9, 90)).toBeFalsy();
      expect(helpers.areEqual(11.5, 11.5)).toBeTruthy();
    });
  });
});

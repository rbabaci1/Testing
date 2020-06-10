const helpers = require("./project-2");

describe("project one helpers", () => {
  describe("getBiggest()", () => {
    it("returns the biggest number", () => {
      expect(helpers.getBiggest(12, 11)).toEqual(12);
      expect(helpers.getBiggest(14, 15)).toEqual(15);
    });
  });

  describe("greeting()", () => {
    it("greets with the passed language", () => {
      expect(helpers.greeting("Spanish")).toBe("Hola!");
      expect(helpers.greeting("German")).toBe("Guten Tag!");
      expect(helpers.greeting("algerian")).toBe("Hello!");
    });
  });

  describe("isTenOrFive()", () => {
    it("checks if the number is 10 or 5", () => {
      expect(helpers.isTenOrFive(10.1)).toBeFalsy();
      expect(helpers.isTenOrFive(10)).toBeTruthy();
      expect(helpers.isTenOrFive(5)).toBeTruthy();
    });
  });

  describe("isInRange()", () => {
    it("checks if the number is between 20 <=> 50", () => {
      expect(helpers.isInRange(21)).toBeTruthy();
      expect(helpers.isInRange(51)).toBeFalsy();
    });
  });
});

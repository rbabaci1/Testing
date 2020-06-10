const helpers = require("./project-1");

describe("project one helpers", () => {
  describe("multiplyByTen()", () => {
    it("multiplies a number by 10", () => {
      expect(helpers.multiplyByTen(3)).toEqual(30);
    });
  });
});

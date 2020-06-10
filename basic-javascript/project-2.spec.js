const helpers = require("./project-2");

describe("project one helpers", () => {
  describe("getBiggest()", () => {
    it("returns the biggest number", () => {
      expect(helpers.getBiggest(12, 11)).toEqual(12);
      expect(helpers.getBiggest(14, 15)).toEqual(15);
    });
  });
});

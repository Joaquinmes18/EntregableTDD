import item from "./item.js";

describe("Precioneto", () => {
  it("deberia devolver el precio neto", () => {
    expect(item(20, 3)).toEqual(60);
  });
});

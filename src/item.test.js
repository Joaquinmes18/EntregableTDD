import PrecioNeto from "./item.js";

describe("Precioneto", () => {
  it("deberia devolver el precio neto", () => {
    expect(PrecioNeto(20, 3)).toEqual(60);
  });
});

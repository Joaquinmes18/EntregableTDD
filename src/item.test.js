import precioNeto from "./item.js";

describe("Precioneto", () => {
  it("deberia devolver el precio neto", () => {
    expect(precioNeto(20, 3)).toEqual(60);
  });
});

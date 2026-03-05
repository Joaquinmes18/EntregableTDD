import PrecioTotal from './impuesto.js';

describe("PrecioTotal", () => {
  it("deberia devolver el precio total con impuesto", () => {
    expect(PrecioTotal(60, 3.75)).toEqual(63.75);
  });
});

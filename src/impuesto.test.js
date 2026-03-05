import PrecioTotal from './impuesto.js';

describe("PrecioTotal", () => {
  it("deberia devolver el precio total con impuesto", () => {
    expect(PrecioTotal(60, 0.0625)).toEqual(3.75);
  });
});

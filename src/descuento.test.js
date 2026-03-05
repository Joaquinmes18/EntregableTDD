import PrecioDescuento from './descuento.js';

describe("PrecioDescuento", () => {
  it("deberia devolver el precio con descuento", () => {
    expect(PrecioDescuento(100, 0.1, 15000)).toEqual(90);
  });
});

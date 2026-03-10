const calcularTotal = require('./totalizador');

describe("Totalizador de Ventas", () => {
  it("deberia calcular el precio neto multiplicando la cantidad por el precio", () => {
    expect(calcularTotal(20, 3)).toEqual(60);
  });
});
const calcularTotal = require('./totalizador');

describe("Totalizador de Ventas", () => {
  it("deberia calcular el precio neto multiplicando la cantidad por el precio", () => {
    expect(calcularTotal(20, 3, 'UT')).toEqual(63.99); 
  });

  it("deberia aplicar el impuesto de California (8.25%) por defecto", () => {
    expect(calcularTotal(20, 3)).toEqual(64.95); 
  });

  it("deberia aplicar un 3% de descuento para ordenes de 1000 o mas, y luego aplicar el impuesto", () => {
    expect(calcularTotal(400, 3, 'TX')).toEqual(1236.75);
  });
});
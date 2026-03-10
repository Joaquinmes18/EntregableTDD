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
  it("deberia sumar los descuentos e impuestos adicionales segun la categoria elegida", () => {
    expect(calcularTotal(20, 3, 'TX', 'Alimentos')).toEqual(62.475);
  });
  it("deberia sumar el costo de envio multiplicando la cantidad por el costo segun el peso", () => {
    expect(calcularTotal(2, 10, 'CA', 'Varios', 15)).toEqual(28.65);
  });
  it("deberia aplicar un descuento en el costo de envio si el cliente es Recurrente", () => {
    expect(calcularTotal(2, 10, 'CA', 'Varios', 15, 'Recurrente')).toEqual(28.615);
  });
  it("deberia restar $100 si es Recurrente, compra Alimentos y el neto supera 3000", () => {
    expect(calcularTotal(1000, 4, 'CA', 'Alimentos', 0, 'Recurrente')).toEqual(3926.9);
  });
  it("deberia lanzar un error 'Datos invalidos' si se introducen numeros negativos", () => {
    expect(() => { calcularTotal(-5, 10) }).toThrow("Datos invalidos");
  });
});
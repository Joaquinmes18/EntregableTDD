const calcularTotal = require('./totalizador');

describe('Totalizador de Ventas', () => {
  test('Debe calcular el precio neto multiplicando cantidad por precio', () => {
    expect(calcularTotal(20, 3)).toBe(60);
  });
});
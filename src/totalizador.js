function calcularTotal(cantidad, precio, estado = 'CA') {
  const impuestos = { 'UT': 0.0665, 'NV': 0.08, 'TX': 0.0625, 'AL': 0.04, 'CA': 0.0825 };
  const neto = cantidad * precio;
  const impuestoAplicado = neto * (impuestos[estado] || 0);
  return Number((neto + impuestoAplicado).toFixed(2));
}
module.exports = calcularTotal;
function obtenerDescuentoVolumen(neto) {
  if (neto >= 30000) return 0.15;
  if (neto >= 10000) return 0.10;
  if (neto >= 7000) return 0.07;
  if (neto >= 3000) return 0.05;
  if (neto >= 1000) return 0.03;
  return 0; 
}

function calcularTotal(cantidad, precio, estado = 'CA') {
  const impuestos = { 'UT': 0.0665, 'NV': 0.08, 'TX': 0.0625, 'AL': 0.04, 'CA': 0.0825 };
  
  const neto = cantidad * precio;
  const porcentajeDescuento = obtenerDescuentoVolumen(neto);
  const valorDescuento = neto * porcentajeDescuento;
  const netoConDescuento = neto - valorDescuento;
  const tasaImpuesto = impuestos[estado] || 0; 
  const impuestoAplicado = netoConDescuento * tasaImpuesto;
  
  return Number((netoConDescuento + impuestoAplicado).toFixed(2));
}

module.exports = calcularTotal;
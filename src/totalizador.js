function obtenerDescuentoVolumen(neto) {
  if (neto >= 30000) return 0.15;
  if (neto >= 10000) return 0.10;
  if (neto >= 7000) return 0.07;
  if (neto >= 3000) return 0.05;
  if (neto >= 1000) return 0.03;
  return 0; 
}

function obtenerTasasCategoria(categoria) {
  const categorias = {
    'Alimentos': { impuesto: 0, descuento: 0.02 },
    'Bebidas alcohólicas': { impuesto: 0.07, descuento: 0 },
    'Material de escritorio': { impuesto: 0, descuento: 0.015 },
    'Muebles': { impuesto: 0.03, descuento: 0 },
    'Electrónicos': { impuesto: 0.04, descuento: 0.01 },
    'Vestimenta': { impuesto: 0.02, descuento: 0 },
    'Varios': { impuesto: 0, descuento: 0 }
  };
  return categorias[categoria] || categorias['Varios']; 
}

function calcularTotal(cantidad, precio, estado = 'CA', categoria = 'Varios') {
  const impuestos = { 'UT': 0.0665, 'NV': 0.08, 'TX': 0.0625, 'AL': 0.04, 'CA': 0.0825 };
  
  const neto = cantidad * precio;
  const tasasCategoria = obtenerTasasCategoria(categoria);
  
  const descuentoTotal = obtenerDescuentoVolumen(neto) + tasasCategoria.descuento;
  const valorDescuento = neto * descuentoTotal;
  const netoConDescuento = neto - valorDescuento;
  
  const tasaImpuesto = (impuestos[estado] || 0) + tasasCategoria.impuesto; 
  const impuestoAplicado = netoConDescuento * tasaImpuesto;
  
  return Number((netoConDescuento + impuestoAplicado).toFixed(3));
}

module.exports = calcularTotal;
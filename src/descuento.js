import PrecioTotal from './impuesto.js';
import cantidadd from './item.js';
function PrecioDescuento(PrecioTotal, porcentajeDescuento, cantidad) {
    if (cantidad >= 1000 && cantidad < 3000) {
        porcentajeDescuento = 0.03;
}
if (cantidad >= 3000 && cantidad < 7000) {
        porcentajeDescuento = 0.05;
}
if (cantidad >= 7000 && cantidad < 10000) {
        porcentajeDescuento = 0.07;
}
if (cantidad >= 10000 && cantidad < 30000) {
        porcentajeDescuento = 0.10;
}
if (cantidad >= 30000 ) {
        porcentajeDescuento = 0.15;
}
    total = PrecioTotal * porcentajeDescuento;
    return PrecioTotal - total;
}
export default PrecioDescuento;
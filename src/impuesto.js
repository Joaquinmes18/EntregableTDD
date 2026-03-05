import PrecioNeto from "./item.js";
function PrecioTotal(PrecioNeto, porcentajeImpuesto) {
    if (porcentajeImpuesto == "UT") {
        UT==0.0665
}
if (porcentajeImpuesto == "TX") {
        UT==0.0625
}
if (porcentajeImpuesto == "NV") {
        UT==0.08
}
if (porcentajeImpuesto == "AL") {
        UT==0.04
}
if (porcentajeImpuesto == "CA") {
        UT==0.0825
}
    return PrecioNeto * porcentajeImpuesto;
}
export default PrecioTotal;
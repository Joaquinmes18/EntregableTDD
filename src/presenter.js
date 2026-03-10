// ELIMINAMOS LA LÍNEA DEL IMPORT

const form = document.getElementById('ventas-form');
const resultadoBox = document.getElementById('resultado-box');
const mensajeResultado = document.getElementById('mensaje-resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);
    const estado = document.getElementById('estado').value;
    const categoria = document.getElementById('categoria').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const cliente = document.getElementById('cliente').value;

    try {
        const totalFinal = calcularTotal(cantidad, precio, estado, categoria, peso, cliente);

        mensajeResultado.innerHTML = "Total a Pagar: $" + totalFinal;
        resultadoBox.style.display = "block";

    } catch (error) {
        mensajeResultado.innerHTML = "Error: " + error.message;
        resultadoBox.style.display = "block";
    }
});
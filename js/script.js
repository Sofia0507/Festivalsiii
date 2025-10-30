
// CUENTA ATRAS HOME PAGE

const festivalDate =new Date ("March 2026 17:00:00");
function actualizarCuentaAtras(){
    const diasElem = document.getElementById("dias");
    const horasElem = document.getElementById("horas");
    const minutosElem = document.getElementById("minutos");
    const segundosElem = document.getElementById("segundos");
// Protege la funció para que no fastidie a otra pagina
    if (!diasElem || !horasElem || !minutosElem || !segundosElem) return;


    const ahora= new Date().getTime();
    const diferencia = festivalDate - ahora;

    const dias= Math.floor(diferencia/(1000*60*60*24));
    const horas= Math.floor((diferencia % (1000*60*60*24))/(1000*60*60));
    const minutos= Math.floor((diferencia % (1000*60*60))/(1000*60));
    const segundos= Math.floor((diferencia % (1000*60))/(1000));

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas.toString().padStart(2,'0');
    document.getElementById("minutos").textContent = minutos.toString().padStart(2,'0');
    document.getElementById("segundos").textContent = segundos.toString().padStart(2,'0');

    // Cuando llegue a 0

    if (diferencia < 0){
        clearInterval(intervalo);
        document.querySelector("#cuenta-atrás").innerHTML = "<h2>¡El festival ha comenzado!</h2>";
    }
}

// Actualizar asi cada segundo
const intervalo = setInterval(actualizarCuentaAtras, 1000);
actualizarCuentaAtras();

// VENTA ENTRADAS
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('input[type="number"]');
    const totalPriceElement = document.getElementById("totalPrice");
    const managementExpensesElement = document.getElementById("managementExpenses");
    const buyButton = document.getElementById("buyPass");
    const form = document.getElementById("form");

    // Calcular precio total
    function calculateTotalPrice() {
        let totalPrice = 0;

        // Sumar el precio de cada tipo de entrada
        inputs.forEach((input) => {
            const price = parseFloat(input.dataset.price) || 0;
            const quantity = parseInt(input.value) || 0;
            totalPrice += price * quantity;
        });

        // Calcular gastos de gestión (por ejemplo, 10%)
        const managementExpenses = totalPrice * 0.1;

        // Total final (entradas + gestión)
        const finalTotal = totalPrice + managementExpenses;

        // Actualizar los elementos del HTML
        managementExpensesElement.textContent = managementExpenses.toFixed(2) + " €";
        totalPriceElement.textContent = finalTotal.toFixed(2) + " €";

        // Habilitar o deshabilitar el botón
        if (finalTotal > 0) {
            buyButton.classList.remove("disabled");
        } else {
            buyButton.classList.add("disabled");
        }
    }

    // Escuchar cambios en los inputs
    inputs.forEach((input) => {
        input.addEventListener("input", calculateTotalPrice);
    });

    // Evitar envío real del formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!buyButton.classList.contains("disabled")) {
            alert("Compra realizada correctamente 🎟️");
        }
    });

    // Calcular total al iniciar
    calculateTotalPrice();
});
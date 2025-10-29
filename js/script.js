
// CUENTA ATRAS HOME PAGE

const festivalDate =new Date ("March 2026 17:00:00");
function actualizarCuentaAtras(){
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
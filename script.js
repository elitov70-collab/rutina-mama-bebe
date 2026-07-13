// Saludo según la hora
const saludo = document.getElementById("saludo");

const hora = new Date().getHours();

if (hora < 12) {
  saludo.textContent = "☀️ Buenos días";
} else if (hora < 19) {
  saludo.textContent = "🌤️ Buenas tardes";
} else {
  saludo.textContent = "🌙 Buenas noches";
}

// Casillas
const checks = document.querySelectorAll("input[type='checkbox']");
const barra = document.getElementById("avance");
const porcentaje = document.getElementById("porcentaje");

// Cargar progreso guardado
checks.forEach((check, index) => {
    const guardado = localStorage.getItem("check_" + index);
    if (guardado === "true") {
        check.checked = true;
    }

    check.addEventListener("change", () => {
        localStorage.setItem("check_" + index, check.checked);
        actualizarBarra();
    });
});

function actualizarBarra() {

    const total = checks.length;

    const marcados =
        document.querySelectorAll("input[type='checkbox']:checked').length;

    const progreso = Math.round((marcados / total) * 100);

    barra.style.width = progreso + "%";

    porcentaje.textContent = progreso + "% completado";

    if (progreso === 100) {
        alert("🎉 ¡Excelente trabajo, Carolina! Hoy completaste toda tu rutina. 💙");
    }

}

actualizarBarra();
function mostrarSeccion(id){

    const seccion = document.getElementById(id);

    if(seccion.style.display==="none"){

        seccion.style.display="block";

    }else{

        seccion.style.display="none";

    }

}

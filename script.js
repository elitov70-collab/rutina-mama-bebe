const saludo = document.getElementById("saludo");

const hora = new Date().getHours();

if (hora < 12) {
    saludo.textContent = "☀️ Buenos días";
} else if (hora < 19) {
    saludo.textContent = "🌤️ Buenas tardes";
} else {
    saludo.textContent = "🌙 Buenas noches";
}
const checks = document.querySelectorAll("input[type='checkbox']");

function actualizarBarra(){

const total = checks.length;

const marcados =
document.querySelectorAll("input[type='checkbox']:checked").length;

const porcentaje = Math.round((marcados/total)*100);

document.getElementById("avance").style.width = porcentaje+"%";

document.getElementById("porcentaje").textContent =
porcentaje+" % completado";

}

checks.forEach(c=>{

c.addEventListener("change",actualizarBarra);

});

actualizarBarra();

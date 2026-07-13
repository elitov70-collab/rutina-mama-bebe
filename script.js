const saludo = document.getElementById("saludo");

const hora = new Date().getHours();

if (hora < 12) {
    saludo.textContent = "☀️ Buenos días";
} else if (hora < 19) {
    saludo.textContent = "🌤️ Buenas tardes";
} else {
    saludo.textContent = "🌙 Buenas noches";
}

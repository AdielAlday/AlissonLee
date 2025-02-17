// Función para verificar usuario y contraseña
function verificarLogin() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    
    if (usuario === "RossiCamacho" && contraseña === "26-02-23/12-08-22/adielito") {
        window.location.href = "index2.html";  // 🔄 Redirige a otra página
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}
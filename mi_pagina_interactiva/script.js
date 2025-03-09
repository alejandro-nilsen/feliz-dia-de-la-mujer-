document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const btn = document.getElementById("felizDiaBtn");
    const closeBtn = document.querySelector(".close");
    const shareLink = document.getElementById("shareLink");

    // Mostrar modal
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Cerrar modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Compartir enlace
    shareLink.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert("¡Enlace copiado! Compártelo con quien quieras. 📲"))
            .catch(err => console.log("Error al copiar enlace", err));
    });
});


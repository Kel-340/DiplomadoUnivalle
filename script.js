const UI = {
    cuerpo: document.body,
    btnTema: document.querySelector("#btn-tema"),
    foto: document.querySelector(".foto-perfil"),  

    aplicarTema(oscuro) {
        this.cuerpo.classList.toggle("dark-mode", oscuro);
        this.btnTema.textContent = oscuro ? "☀️" : "🌙";
        this.btnTema.setAttribute(
            "aria-label",
            oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
        );
        this.foto.src = oscuro ? this.foto.dataset.oscuro : this.foto.dataset.claro;
    },

    inicializarTema() {
        this.aplicarTema(localStorage.getItem("temaPreferido") === "oscuro");
    },

    alternarTema() {
        const oscuro = !this.cuerpo.classList.contains("dark-mode");
        this.aplicarTema(oscuro);
        localStorage.setItem("temaPreferido", oscuro ? "oscuro" : "claro");
    }
};

UI.inicializarTema();
UI.btnTema.addEventListener("click", () => UI.alternarTema());
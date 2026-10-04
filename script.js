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

const Pestañas = {
    botones: document.querySelectorAll(".tab-btn"),
    paneles: document.querySelectorAll(".panel"),

    // Muestra el panel con ese id y oculta los demás
    mostrar(id) {
        this.paneles.forEach(panel => {
            panel.hidden = panel.id !== id;
        });
        this.botones.forEach(btn => {
            const activa = btn.dataset.target === id;
            btn.classList.toggle("activa", activa);
            btn.setAttribute("aria-selected", activa);
        });
    },

    iniciar() {
        this.botones.forEach(btn => {
            btn.addEventListener("click", () => this.mostrar(btn.dataset.target));
        });
        this.mostrar(this.botones[0].dataset.target); // 0,1,2,3 acorde a la cantidad de pestañas
    }
};

Pestañas.iniciar();
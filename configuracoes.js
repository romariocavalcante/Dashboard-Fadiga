const buttons = document.querySelectorAll(".btn-view");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Configurações salvas com sucesso!");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    
    const botoesEditar = document.querySelectorAll(".btn-outline-secondary");

    botoesEditar.forEach(botao => {
        botao.addEventListener("click", () => {
            alert("Aviso: A funcionalidade de edição ainda está em desenvolvimento neste Mockup.");
        });
    });

});
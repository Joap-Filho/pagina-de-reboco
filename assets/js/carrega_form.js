// seu_script.js
document.addEventListener("DOMContentLoaded", function () {
    // Carregue o conteúdo do form.html
    fetch("./form/form.html")
        .then(response => response.text())
        .then(data => {
            // Insira o conteúdo do header no elemento com ID "headerComponent"
            document.querySelector("#formComponent").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o header:", error));
});

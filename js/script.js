
// Validação e interatividade do formulário de contato
document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verificar se os campos estão preenchidos
    if (nome && email && mensagem) {
        // Mostrar mensagem de confirmação
        document.getElementById("mensagem-confirmacao").style.display = "block";
        document.getElementById("contatoForm").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

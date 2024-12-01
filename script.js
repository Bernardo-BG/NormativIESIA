// Função simples para exibir uma resposta ao enviar o formulário
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    
    if (nome && email && mensagem) {
        document.getElementById("resposta").innerHTML = `
            <p>Obrigado, ${nome}! Sua mensagem foi recebida com sucesso. Responderemos em breve.</p>
        `;
    } else {
        document.getElementById("resposta").innerHTML = `
            <p style="color: red;">Por favor, preencha todos os campos.</p>
        `;
    }
});

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    
    if (nome && email && mensagem) {
        document.getElementById("resposta").innerHTML = `
            <p>Obrigado, ${nome}! Sua mensagem foi recebida com sucesso. Responderemos em breve.</p>
        `;
    } else {
        document.getElementById("resposta").innerHTML = `
            <p style="color: red;">Por favor, preencha todos os campos.</p>
        `;
    }
});

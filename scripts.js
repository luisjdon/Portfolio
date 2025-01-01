// Validação do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        // Aqui você pode adicionar lógica para enviar o formulário via email (por exemplo, via SMTP, se necessário)
        // Limpar campos
        document.getElementById('form-contato').reset();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
// Função para abrir o projeto no modal
function openProject(project) {
    const modal = document.getElementById('modal');
    const projectContent = document.getElementById('project-content');

    // Adicionar conteúdo do projeto ao modal
    switch (project) {
        case 'conversor':
            projectContent.innerHTML = '<h2>Conversor de Unidades</h2><iframe src="conversor.html" width="100%" height="400px"></iframe>';
            break;
        case 'calculadora':
            projectContent.innerHTML = '<h2>Calculadora</h2><iframe src="calculadora.html" width="100%" height="400px"></iframe>';
            break;
        case 'jogo':
            projectContent.innerHTML = '<h2>Jogo</h2><iframe src="jogo.html" width="100%" height="400px"></iframe>';
            break;
        case 'canvas':
            projectContent.innerHTML = '<h2>Desenhando com Canvas</h2><iframe src="canvas.html" width="100%" height="400px"></iframe>';
            break;
        case 'cronometro':
            projectContent.innerHTML = '<h2>Cronômetro</h2><iframe src="cronometro.html" width="100%" height="400px"></iframe>';
            break;
        default:
            projectContent.innerHTML = '<p>Projeto não encontrado.</p>';
    }

    // Exibir o modal
    modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}


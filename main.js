function abrirModal(imagemSrc, link, sinopse) {
    document.getElementById('modalImagem').src = imagemSrc;
    document.getElementById('modalLink').href = link;
    document.getElementById('modalSinopse').textContent = sinopse;
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalMensagem').value = '';
    document.getElementById('modalMensagem').disabled = false;
    document.querySelector('.modal-form button').disabled = false;
    document.getElementById('modalConfirmacao').classList.add('escondido');

    const estrelas = document.querySelectorAll('#modalRating input');
    estrelas.forEach(estrela => estrela.checked = false);
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function enviarMensagem() {
    const textarea = document.getElementById('modalMensagem');
    const confirmacao = document.getElementById('modalConfirmacao');
    const botao = document.querySelector('.modal-form button');

    if (textarea.value.trim() !== '') {
        textarea.disabled = true;
        botao.disabled = true;
        confirmacao.classList.remove('escondido');
    } else {
        alert("Por favor, escreva uma mensagem antes de enviar.");
    }
}

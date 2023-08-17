
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value;

        if (idSelecionado === 'Ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');


        const imagemjogador1 = document.getElementById('personagem-jogador-1');
        imagemjogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomejogador1 = document.getElementById('nome-personagem-jogador1');
        nomejogador1.innerHTML = personagem.getAttribute('data-name');


    })
})














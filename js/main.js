const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {
    // usabilidade para acesso via smartphone
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    removerSelecaoPersonagem()

    personagem.classList.add('selecionado')

    alterarImagemPersonagemSelecionado(personagem)

    alterarNomePersonagemSelecionado(personagem)

    alterarDescricaoPersonagem(personagem)
  })
})

function removerSelecaoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado')
  personagemSelecionado.classList.remove('selecionado')
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande')
  const idPersonagem = personagem.attributes.id.value
  imagemPersonagemGrande.src = `./assets/card-${idPersonagem}.png`
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById('nome-personagem')
  nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById('descricao-personagem')
  descricaoPersonagem.innerText = personagem.getAttribute('data-description')
}

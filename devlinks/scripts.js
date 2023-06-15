function toggleMode() {
    const html = document.documentElement;

    // pegar tag img do seletor css
    const img = document.querySelector("#profile img"); 
    
    html.classList.toggle('light')

    // substituir img por dark ou light

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Tiago Figueira com óculos esucro, sorrindo para o lado')
    } else {
        img.setAttribute('src', './assets/avatar-dark.png')
        img.setAttribute('alt', 'Foto de Tiago Figueira sorrindo em um estacionamento, com a estátua da liberdade da Havan ao fundo')
    }
}





// substituir a img
// se tiver light mode, adicionar a imagem light
// se tiver sem light mode, manter a imagem normal
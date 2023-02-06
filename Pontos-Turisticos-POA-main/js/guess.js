let select = document.querySelector('.block__select')
let mainGuess = document.querySelector('.main__container')
let guessRua = document.querySelector('.guess__rua')
let guessBairro = document.querySelector('.guess__bairro')
let guessAno = document.querySelector('.guess__ano')
let guessTipo = document.querySelector('.guess__tipo')
let guessBlock = document.querySelector('.main__block')
let main = document.querySelector('.main')



    let guess = Math.floor(Math.random() * (31 - 1));
    guess = pontos[guess]

for(i = 0; i < 30; i++){
    select.innerHTML += '<option value="'+pontos[i].nome+'">'+pontos[i].nome+'</option>'
}

select.addEventListener('change', function(){
    var selecionada = this.options[this.selectedIndex];
    var value = selecionada.getAttribute('value');
    if(value == null){
        return false
    }
    else if (value == guess.nome){
        mainGuess.innerHTML += `
        <div class="main__guess">
            <div class="guess guess__rua" style="background-color:green;">${pontos[this.selectedIndex-1].rua}</div>
            <div class="guess guess__bairro" style="background-color:green;">${pontos[this.selectedIndex-1].bairro}</div>
            <div class="guess guess__ano" style="background-color:green;">${pontos[this.selectedIndex-1].ano}</div>
            <div class="guess guess__tipo" style="background-color:green;">${pontos[this.selectedIndex-1].tipo}</div>
        </div>
        `
        guessBlock.innerHTML = `
        <img class="block__image" src="${guess.imagem}" alt="imagem do ${guess.nome}"/>
        `
        main.innerHTML += ' <h1 class="main__h1">Você Acertou! O ponto é o '+guess.nome+'</h1>'
    }
    else {
        mainGuess.innerHTML += `
        <div class="main__guess--name">
            <h1>${pontos[this.selectedIndex-1].nome}</h1>
        </div>
        <div class="main__guess">
            <div class="guess guess__rua">${pontos[this.selectedIndex-1].rua}</div>
            <div class="guess guess__bairro">${pontos[this.selectedIndex-1].bairro}</div>
            <div class="guess guess__ano">${pontos[this.selectedIndex-1].ano}</div>
            <div class="guess guess__tipo">${pontos[this.selectedIndex-1].tipo}</div>
        </div>
    `

    let guessRua = document.querySelectorAll('.guess__rua')
    let guessBairro = document.querySelectorAll('.guess__bairro')
    let guessAno = document.querySelectorAll('.guess__ano')
    let guessTipo = document.querySelectorAll('.guess__tipo')

    for(i = 0; i < guessRua.length; i++){
    }

    //GUESS RUA

    if(pontos[this.selectedIndex-1].rua == guess.rua){
        guessRua[i-1].style.backgroundColor = 'green'
    }
    else {
    }

    //GUESS BAIRRO

    if(pontos[this.selectedIndex-1].bairro == guess.bairro){
        guessBairro[i-1].style.backgroundColor = 'green'
    }
    else {
    }

    //GUESS ANO

    if(pontos[this.selectedIndex-1].ano == guess.ano){
        guessAno[i-1].style.backgroundColor = 'green'
    }
    else if(pontos[this.selectedIndex-1].ano < guess.ano) {
        guessAno[i-1].innerHTML +=  ' ↑'
    }
    else {
        guessAno[i-1].innerHTML +=  ' ↓'
    }

    //GUESS TIPO

    if(pontos[this.selectedIndex-1].tipo == guess.tipo){
        guessTipo[i-1].style.backgroundColor = 'green'
    }
    else {
    }

    }
})
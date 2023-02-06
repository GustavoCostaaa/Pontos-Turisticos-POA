let guessHow = document.querySelector('.button__how')
let blockClose = document.querySelector('.block__close')
let mainBlockHow = document.querySelector('.main__block--how')

guessHow.addEventListener('click', function(){
    mainBlockHow.style.display = 'block'
})

blockClose.addEventListener('click', function(){
    mainBlockHow.style.display = 'none'
})
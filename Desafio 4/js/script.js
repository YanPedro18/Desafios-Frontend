let bola = document.querySelector('.bola');
let fundoButton = document.querySelector('.fundo-button');
let fundoQuadro = document.querySelector('.quadros-item-roxo');
let teste = document.querySelector('.teste');
let boxShadow = document.querySelector('.quadros-item');
let boxShadow2 = document.querySelector('.quadros-item-roxo');
let boxShadow3 = document.querySelector('#quadros-item-espaco');
let button = document.querySelector('.fundo-button');


bola.addEventListener('click', function(){
    fundoButton.classList.toggle('fundo-button2');
    fundoQuadro.classList.toggle('quadros-item-azul');
    teste.classList.toggle('black');
    boxShadow.classList.toggle('semBox')
    boxShadow2.classList.toggle('semBox')
    boxShadow3.classList.toggle('semBox')
    button.classList.toggle('fundo-button3')
});










const btnOpenCookie = document?.querySelector('#open-cookie')
const btnAnotherPhrase = document?.querySelector('#another-phrase')
const firstScreen = document?.querySelector('.first-screen')
const secondScreen = document?.querySelector('.second-screen')
const randomPhrase = document?.querySelector('#phrase')

var inicioFrases = ['A vida é', 'O amor é', 'A felicidade é', 'A liberdade é'];
var meioFrases = ['um belo presente', 'a chave para a plenitude', 'encontrada na simplicidade', 'a verdadeira riqueza'];
var fimFrases = ['que devemos valorizar.', 'que merece ser cultivado.', 'que todos buscam.', 'que nos faz sentir vivos.'];

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarFraseAleatoria() {
  var inicio = inicioFrases[numeroAleatorio(0, inicioFrases.length - 1)];
  var meio = meioFrases[numeroAleatorio(0, meioFrases.length - 1)];
  var fim = fimFrases[numeroAleatorio(0, fimFrases.length - 1)];
  
  var fraseAleatoria = inicio + ' ' + meio + ' ' + fim;

  return fraseAleatoria;
}

function toggleScreen() {
    firstScreen.classList.toggle('hide')
    secondScreen.classList.toggle('hide')
}

function handleClickOnCookie() {
    toggleScreen()
    randomPhrase.textContent = gerarFraseAleatoria()
}

function handleNewPhrase() {
    randomPhrase.textContent = gerarFraseAleatoria()
}

btnOpenCookie.addEventListener('click', handleClickOnCookie)
btnAnotherPhrase.addEventListener('click', handleNewPhrase)
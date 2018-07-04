var textInput = document.querySelector('.input');
var clearButton = document.querySelector('#clear');
var guessButton = document.querySelector('#guess');
var resetButton = document.querySelector('#reset');
var centerText = document.querySelector('.center-text');
var guessedText = document.querySelector('.guessed-display');
var thatIsText = document.querySelector('.that-is-box');
var secretNumber;

window.addEventListener('load', getRandomArbitrary, disableButtons());
textInput.addEventListener('keypress', enableButtons);
guessButton.addEventListener('click', function() {
  var guessedValue = parseInt(textInput.value);
  guessedText.innerText = guessedValue;
  comparingGuessInput();
  event.preventDefault();
});
clearButton.addEventListener('click', function () {
  centerText.innerText = '';
  guessedText.innerText = '';
  thatIsText.innerText = '';
  textInput.value = '';
  guessButton.disabled = true;
  clearButton.disabled = true;
});
resetButton.addEventListener('click', function() {
  centerText.innerText = '';
  guessedText.innerText = '';
  thatIsText.innerText = '';
  textInput.value = '';
  getRandomArbitrary();
});

function getRandomArbitrary() {
  secretNumber = Math.floor(Math.random() * (100 - 1) + 1);
}

function enableButtons() {
  guessButton.disabled = false;
  resetButton.disabled = false;
  clearButton.disabled = false;
}

function disableButtons() {
  guessButton.disabled = true;
  resetButton.disabled = true;
  clearButton.disabled = true;
}

function comparingGuessInput() {
  var guessedValue = parseInt(textInput.value);
  if (guessedValue === secretNumber){
    thatIsText.innerText = "BOOM!"
  } else if (guessedValue > 100) {
    centerText.innerText = "Your last guess was"
    thatIsText.innerText = "That is too high, please pick a number between 1 and 100";
  } else if (guessedValue > secretNumber) {
    centerText.innerText = "Your last guess was"
    thatIsText.innerText = "That is too high";
  } else if (guessedValue < 1) {
    centerText.innerText = "Your last guess was"
    thatIsText.innerText = "That is too low, please pick a number between 1 and 100";
  } else if (guessedValue < secretNumber) {
    centerText.innerText = "Your last guess was"
    thatIsText.innerText = "That is too low";
  } 
}
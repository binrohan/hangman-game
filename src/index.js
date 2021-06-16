import Hangman from './hangman';
import getPuzzleAsync from './requests';

let game1;
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const statusEl = document.querySelector('#status');

window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = '';
  statusEl.textContent = game1.message;

  game1.puzzle.split('').forEach((letter) => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzleEl.append(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzleAsync('1');
  game1 = new Hangman(puzzle, 7);
  render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

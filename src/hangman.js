'use strict';

// const Hangman = function (word, remainingGuesses, status = 'playing') {
//   this.word = word.toLowerCase().split('');
//   this.remainingGuesses = remainingGuesses;
//   this.guessedLetters = [];
//   this.status = status;
// };

class Hangman {
  constructor(word, remainingGuesses, status = 'playing') {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = status;
  }

  makeGuess(guess) {
    guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
      this.guessedLetters.push(guess);
    }

    if (this.status !== 'playing') return false;

    if (isBadGuess && isUnique) {
      this.remainingGuesses--;
    }
    this.calucateStatus();
  }

  getPuzzle() {
    let puzzle = [];

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });

    return puzzle;
  }

  get puzzle() {
    let puzzle = [];

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });

    return puzzle;
  }

  calucateStatus() {
    // let finished = true;

    // this.word.forEach((letter) => {
    //   if (this.guessedLetters.includes(letter)) {
    //   } else {
    //     finished = false;
    //   }
    // });

    // const letterUnguessed = this.word.filter(
    //   (letter) => !this.guessedLetters.includes(letter)
    // );
    // const finished = letterUnguessed.length === 0;

    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === ' '
    );

    if (this.remainingGuesses === 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }

  message() {
    return this.status === 'failed'
      ? `Nice try! The word was "${this.word.join('')}"`
      : this.status === 'playing'
      ? `Guesses left ${this.remainingGuesses}`
      : 'Great work! You guessed the word';
  }

  get message() {
    return this.status === 'failed'
      ? `Nice try! The word was "${this.word.join('')}"`
      : this.status === 'playing'
      ? `Guesses left ${this.remainingGuesses}`
      : 'Great work! You guessed the word';
  }
}

// Hangman.prototype.makeGuess = function (guess) {
//   guess.toLowerCase();
//   const isUnique = !this.guessedLetters.includes(guess);
//   const isBadGuess = !this.word.includes(guess);

//   if (isUnique) {
//     this.guessedLetters.push(guess);
//   }

//   if (this.status !== 'playing') return false;

//   if (isBadGuess && isUnique) {
//     this.remainingGuesses--;
//   }
//   this.calucateStatus();
// };

// Hangman.prototype.getPuzzle = function () {
//   let puzzle = [];

//   this.word.forEach((letter) => {
//     if (this.guessedLetters.includes(letter) || letter === ' ') {
//       puzzle += letter;
//     } else {
//       puzzle += '*';
//     }
//   });

//   return puzzle;
// };

// Hangman.prototype.calucateStatus = function () {
//   // let finished = true;

//   // this.word.forEach((letter) => {
//   //   if (this.guessedLetters.includes(letter)) {
//   //   } else {
//   //     finished = false;
//   //   }
//   // });

//   // const letterUnguessed = this.word.filter(
//   //   (letter) => !this.guessedLetters.includes(letter)
//   // );
//   // const finished = letterUnguessed.length === 0;

//   const finished = this.word.every((letter) =>
//     this.guessedLetters.includes(letter)
//   );

//   if (this.remainingGuesses === 0) {
//     this.status = 'failed';
//   } else if (finished) {
//     this.status = 'finished';
//   } else {
//     this.status = 'playing';
//   }
// };

// Hangman.prototype.message = function () {
//   return this.status === 'failed'
//     ? `Nice try! The word was "${this.word.join('')}"`
//     : this.status === 'playing'
//     ? `Guesses left ${this.remainingGuesses}`
//     : 'Great work! You guessed the word';
// };

export { Hangman as default };

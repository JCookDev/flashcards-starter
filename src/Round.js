const Turn = require('../src/Turn');

class Round {
  constructor(deck, currentCard) {
    this.deck = deck ? deck.cards : [];
    this.currentCard = deck.cards[0];
    this.turn = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turn++;
    const turn = new Turn(guess, this.currentCard);
    this.currentCard = this.deck[this.turn];
    if (turn.evaluateGuess() === true) {
      return turn.giveFeedback();
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    }
  }

  calculatePercentageCorrect() {
    var score =
    (((this.turn - this.incorrectGuesses.length) / this.turn) * 100);
    return Math.floor(score);
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`;
  }

}

module.exports = Round;

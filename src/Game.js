const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = 0;
    this.cards = [];
  }

  start() {
    this.currentRound++;
    for (let i = 0; i < prototypeQuestions.length; i++) {
     let card = new Card(
       prototypeQuestions[i].id,
       prototypeQuestions[i].questions,
       prototypeQuestions[i].answers,
       prototypeQuestions[i].correctAnswer);
     this.cards.push(card);
   }
   const deck = new Deck(prototypeQuestions);
   const round = new Round(deck);
   this.printMessage(deck, round);
   this.printQuestion(round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;

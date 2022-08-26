const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

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

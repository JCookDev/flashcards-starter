const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], "object");
    card2 = new Card(12, 'Which iteration method returns an array of the same length as the original array?', ["map()", "forEach()", "reduce()"], "map()");
    card3 = new Card(14, 'Which iteration method can turn an array into a single value of any data type?', ["reduce()", "map()", "filter()"], "reduce()");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

});

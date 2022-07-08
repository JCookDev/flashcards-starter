const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let turn;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('array', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    expect(Turn).to.be.an.instanceof(Turn);
  });

  it.skip('should accept a guess', function() {
    expect(turn.returnGuess()).to.equal('array')
  });

  it.skip('should return an object', function() {
    expect(turn.returnCard()).to.equal(card)
  });

  it.skip('should evaluate guess', function() {
    expect(turn.evaluateGuess()).to.equal(false)
  });

  it.skip('should give feedback', function() {
    expect(turn.giveFeedback().to.equal('incorrect!'))
  });

});

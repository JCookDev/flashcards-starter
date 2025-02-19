const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', function() {

  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should be able to keep track of current round', function() {
    game.start();
    expect(game.currentRound).to.equal(1);
  });

  it('should be able to take 30 cards', function() {
    game.start();
    expect(game.cards.length).to.equal(30);
  });
});

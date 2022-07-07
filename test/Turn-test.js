const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(Turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store user\'s guess as a string', function() {
    const turn = new Turn('pug');
    expect(turn.guess).to.be.a('string')

  });
});

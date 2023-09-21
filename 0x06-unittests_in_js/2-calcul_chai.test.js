const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber() with type SUM', () => {
  it('add 5 and 10', () => {
    expect(calculateNumber('SUM', 5, 10).to.equal(15);
  });
  it('add 2.4 and 2.7', () => {
    expect(calculateNumber('SUM', 2.4, 2.7).to.equal(5);
  });
  it('add 1.0 and 3.0', () => {
    expect(calculateNumber('SUM', 1.0, 3.0).to.equal(4);
  });
  it('add 12.7 and 3.5', () => {
    expect(calculateNumber('SUM', 12.7, 3.5).to.equal(17);
  });
  it('add -0.8 and -1.7', () => {
    expect(calculateNumber('SUM', -0.8, -1.7).to.equal(-3);
  });
});

describe('#calculateNumber() with type SUBTRACT', () => {
  it('subtract 10 and 3', () => {
    expect(calculateNumber('SUBTRACT', 10, 3).to.equal(7);
  });
  it('subtract 1.4 and 5.4', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 5.4).to.equal(-4);
  });
  it('subtract 2.2 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 2.2, 3.7).to.equal(-2);
  });
  it('subtract 1.5 and 4.8', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 4.8).to.equal(-3);
  });
  it('subtract 0.1 and 0.2', () => {
    expect(calculateNumber('SUBTRACT', 0.1, 0.2).to.equal(0);
  });
  it('subtract 8 and -4', () => {
    expect(calculateNumber('SUBTRACT', 8, -4).to.equal(12);
  });
});

describe('#calculateNumber() with type DIVIDE', () => {
  it('divide 1 and 4', () => {
    expect(calculateNumber('DIVIDE', 1, 4).to.equal(0.25);
  });
  it('divide 1 and 3.7', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7).to.equal(0.25);
  });
  it('divide 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5).to.equal(0.2);
  });
  it('divide 1.6 and 2.4', () => {
    assert.equal(calculateNumber('DIVIDE', 1.6, 2.4).to.equal(1);
  });
  it("divide 1.4 and 0.2", () => {
    expect(calculateNumber('DIVIDE', 1.4, 0.2).to.equal('Error');
  });
  it('divide -0.7 and 0.7', () => {
    expect(calculateNumber('DIVIDE', -0.7, 0.7).to.equal(-1);
  });
  it('divide -0.8 and -0.7', () => {
    expect(calculateNumber('DIVIDE', -0.8, -0.7).to.equal(1);
  });
  it('divide -30 and 2.5', () => {
    expect(calculateNumber('DIVIDE', -30, 2.5).to.equal(-10);
  });
  it('divide -44 and -22', () => {
    expect(calculateNumber('DIVIDE', -44, -22).to.equal(2);
  });
\})

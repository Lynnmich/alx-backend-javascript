const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(16.1, 2), 18);
        assert.equal(calculateNumber(2.2, 0), 2);
        assert.equal(calculateNumber(3.1, 2.5), 6);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(2, 16.1), 18);
        assert.equal(calculateNumber(0, 2.2), 2);
        assert.equal(calculateNumber(2.5, 3.1), 6);
    });

    it('suming of a and b', () => {
        assert.equal(calculateNumber(16.1, 2.3), 18);
        assert.equal(calculateNumber(2.2, 0.1), 2);
        assert.equal(calculateNumber(2.5, 4.7), 8);
    });
})

var assert = require('assert');
var NumberToWords = require('../src/main.js');

describe('numberToWords', function() {
    it('should return units in english', function() {
        assert.equal(NumberToWords.numberToWords(1), "one");
    });
});
var assert = require('assert');
var NumberToWords = require('../src/main.js');

describe('numberToWords', function() {
    it('should return units in english', function() {
        assert.equal(NumberToWords.numberToWords(1), "one");
        assert.equal(NumberToWords.numberToWords(2), "two");
        assert.equal(NumberToWords.numberToWords(3), "three");
        assert.equal(NumberToWords.numberToWords(4), "four");
        assert.equal(NumberToWords.numberToWords(5), "five");
        assert.equal(NumberToWords.numberToWords(6), "six");
        assert.equal(NumberToWords.numberToWords(7), "seven");
        assert.equal(NumberToWords.numberToWords(8), "eight");
        assert.equal(NumberToWords.numberToWords(9), "nine");
    });
});
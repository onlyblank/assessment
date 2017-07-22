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

    it('should return teens in english', function() {
        assert.equal(NumberToWords.numberToWords(10), "ten");
        assert.equal(NumberToWords.numberToWords(11), "eleven");
        assert.equal(NumberToWords.numberToWords(12), "twelve");
        assert.equal(NumberToWords.numberToWords(13), "thirteen");
        assert.equal(NumberToWords.numberToWords(14), "fourteen");
        assert.equal(NumberToWords.numberToWords(15), "fifteen");
        assert.equal(NumberToWords.numberToWords(16), "sixteen");
        assert.equal(NumberToWords.numberToWords(17), "seventeen");
        assert.equal(NumberToWords.numberToWords(18), "eighteen");
        assert.equal(NumberToWords.numberToWords(19), "nineteen");
    });

});
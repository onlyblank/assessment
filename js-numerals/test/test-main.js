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

  it('should return teens between 10 and 19 in english', function() {
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

  it('should return numbers between 20 and 99 in english', function () {
    assert.equal(NumberToWords.numberToWords(20), "twenty");
    assert.equal(NumberToWords.numberToWords(99), "ninety nine");
    assert.equal(NumberToWords.numberToWords(35), "thirty five");
    assert.equal(NumberToWords.numberToWords(50), "fifty");
    assert.equal(NumberToWords.numberToWords(46), "forty six");
    assert.equal(NumberToWords.numberToWords(74), "seventy four");
  });
});
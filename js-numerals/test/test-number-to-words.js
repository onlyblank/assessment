var assert = require('assert');
var NumberToWords = require('../src/lib/number_to_words.js');

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
    assert.equal(NumberToWords.numberToWords(99), "ninety-nine");
    assert.equal(NumberToWords.numberToWords(35), "thirty-five");    
    assert.equal(NumberToWords.numberToWords(42), "forty-two");
    assert.equal(NumberToWords.numberToWords(50), "fifty");
    assert.equal(NumberToWords.numberToWords(46), "forty-six");
    assert.equal(NumberToWords.numberToWords(74), "seventy-four");
  });

  it('should return numbers between 100 and 999 in english', function () {
    assert.equal(NumberToWords.numberToWords(100), "one hundred");
    assert.equal(NumberToWords.numberToWords(299), "two hundred and ninety-nine");
    assert.equal(NumberToWords.numberToWords(435), "four hundred and thirty-five");
    assert.equal(NumberToWords.numberToWords(150), "one hundred and fifty");
    assert.equal(NumberToWords.numberToWords(201), "two hundred and one");
    assert.equal(NumberToWords.numberToWords(746), "seven hundred and forty-six");
    assert.equal(NumberToWords.numberToWords(984), "nine hundred and eighty-four");
    assert.equal(NumberToWords.numberToWords(999), "nine hundred and ninety-nine")
  });

  it('should return special hundreds in english', function () {
    assert.equal(NumberToWords.numberToWords(1999), "nineteen hundred and ninety-nine");
    assert.equal(NumberToWords.numberToWords(1500), "fifteen hundred");
    assert.equal(NumberToWords.numberToWords(2000), "two thousand");
    assert.equal(NumberToWords.numberToWords(1648), "sixteen hundred and forty-eight");
  });

  it('should return greater than 999 in english', function () {
    assert.equal(NumberToWords.numberToWords(2001), "two thousand and one");
    assert.equal(NumberToWords.numberToWords(3000), "three thousand");
    assert.equal(NumberToWords.numberToWords(17999), "seventeen thousand nine hundred and ninety-nine");
    assert.equal(NumberToWords.numberToWords(1017999), "one million seventeen thousand nine hundred and ninety-nine");
    assert.equal(NumberToWords.numberToWords(17010), "seventeen thousand and ten");
  });

  it('should return the actual testcases in english', function () {
    assert.equal(NumberToWords.numberToWords(7), "seven");
    assert.equal(NumberToWords.numberToWords(42), "forty-two");
    assert.equal(NumberToWords.numberToWords(2001), "two thousand and one");
    assert.equal(NumberToWords.numberToWords(17999), "seventeen thousand nine hundred and ninety-nine");
  });
});
function numberToWords(number) {
	var units = ["one", "two", "three", "four", "five", "six" , "seven", "eight", "nine"]
	return units[number - 1]
}



if (typeof exports !== 'undefined') {
  exports.numberToWords = numberToWords;
}
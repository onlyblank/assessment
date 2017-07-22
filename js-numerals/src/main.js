function numberToWords(number) {
	return (Math.floor(number / 10) < 1) ? units(number-1) : teens(number%10)	
}

function units(index){
	var units = ["one", "two", "three", "four", "five", "six" , "seven", "eight", "nine"]
	return units[index]
}

function teens(index){
	var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
	return teens[index]
}


if (typeof exports !== 'undefined') {
  exports.numberToWords = numberToWords;
}
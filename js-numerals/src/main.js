function numberToWords(number) {
	return (Math.floor(number / 10) < 1) ? units(number) : teens(number)	
}

function units(index){
	var units = ["one", "two", "three", "four", "five", "six" , "seven", "eight", "nine"]

	return units[index-1]
}

function teens(number){
	var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	
	var quo = Math.floor(number / 10);
	var rem = number % 10;

	if(quo > 1){
		return `${tens[quo-2]} ${rem > 0 ? units(rem) : ""}`.trim()
	}else{
		return teens[rem];
	}
}



if (typeof exports !== 'undefined') {
  exports.numberToWords = numberToWords;
}
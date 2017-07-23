function NumberToWords(){
	this.units = ["one", "two", "three", "four", "five", "six" , "seven", "eight", "nine"];
	this.teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	this.tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

	this.getUnits = function(index){
		return this.units[index-1]
	};

	this.getTeens = function(number){
		var quo = Math.floor(number / 10);
		var rem = number % 10;

		if(quo > 1){
			return `${this.tens[quo-2]}${rem > 0 ? "-" + this.getUnits(rem) : ""}`.trim()
		}else{
			return this.teens[rem];
		}
	};
	this.translator = function(number) {
		return (Math.floor(number / 10) < 1) ? this.getUnits(number) : this.getTeens(number)
	}
}

function numberToWords(number){
	var ntw = new NumberToWords();
	return ntw.translator(number);	
}

if (typeof exports !== 'undefined') {
  exports.numberToWords = numberToWords;
}
function NumberToWords(){
	this.units = ["one", "two", "three", "four", "five", "six" , "seven", "eight", "nine"];
	this.teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	this.tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	this.hundred = "hundred"

	this.getUnits = function(number){
		return this.units[number-1]
	};

	this.getTens = function(number){
		var quo = Math.floor(number / 10);
		var rem = number % 10;

		return (quo > 1) ? `${this.tens[quo-2]}${rem > 0 ? "-" + this.getUnits(rem) : ""}`.trim() : this.teens[rem];
	};

	this.getHundreds = function(number){
		var quo = Math.floor(number / 100);
		var rem = number % 100;
		var hundred = "";
		if(quo > 0){
			hundred += `${this.getUnits(quo)} ${this.hundred}`
		}
		if(rem > 0){
			hundred += ` ${rem > 10 ? this.getTens(rem) : this.getUnits(rem)}`
		}
		return hundred
	}

	this.translator = function(number) {
		return (Math.floor(number / 10) < 1) ? this.getUnits(number) : (Math.floor(number / 100) < 1 ? this.getTens(number) : this.getHundreds(number))
	}
}

function numberToWords(number){
	var ntw = new NumberToWords();
	return ntw.translator(number);	
}

if (typeof exports !== 'undefined') {
  exports.numberToWords = numberToWords;
}
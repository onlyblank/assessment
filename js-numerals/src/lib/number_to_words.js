function NumberToWords(){
	this.units = ["one", "two", "three", "four", "five", "six" , "seven", "eight", "nine"];
	this.teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	this.tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	this.hundred = "hundred";
	this.biggest = ["thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quatttuor-decillion", "quindecillion", "sexdecillion", "septen-decillion", "octodecillion", "novemdecillion", "vigintillion"];

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
		hundred += quo > 0 ? `${this.getUnits(quo)} ${this.hundred}`: "";
		if(rem > 0){
			hundred += ` ${rem > 10 ? this.getTens(rem) : this.getUnits(rem)}`
		}
		return hundred
	};

	this.getBiggest = function(array){
		var text = "";
		var c = 0;
		for(var i = array.length - 1; i > 0 ; i--){
			text += array[c] + " " + this.biggest[i-1] + " "; 
			c++;
		}
		text += array[array.length - 1] ? array[array.length - 1] : "";
		return text.trim();
	}

	this.splitNumber = function(number) {
		var array = [];
		var aux = "";
		var counter = 0;
		while(number > 0){
			aux = (number % 10).toString() + aux ;
			number = Math.floor(number / 10);
			counter++;
			if(counter == 3){
				array.push(parseInt(aux));
				aux = "";
				counter = 0;
			}
		}
		aux.length > 0 ? array.push(parseInt(aux)) : "";
		return array.reverse();
	}

	this.baseTranslator = function(number) {
		return (Math.floor(number / 10) < 1) ? this.getUnits(number) : (Math.floor(number / 100) < 1 ? this.getTens(number) : this.getHundreds(number))
	}

	this.translator = function(number){
		var splitted = this.splitNumber(number);
		var realThis = this;
		return this.getBiggest(splitted.map(function(e){
			return realThis.baseTranslator(e);
		}))
	}
}

function numberToWords(number){
	var ntw = new NumberToWords();
	return ntw.translator(number);	
}

if (typeof exports !== 'undefined') {
  exports.numberToWords = numberToWords;
}
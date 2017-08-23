document.addEventListener("DOMContentLoaded", function(event) { 
	var validateNumbers = function(e) {
		var event = e || window.event;
		var key = event.keyCode || event.which;
		var keyChar;
		var regex = /[0-9]|\./;
		keyChar = String.fromCharCode( key );
		if(key == 13){
			translateInput(e);
		}else if(key == 8){
			event.returnValue = true;
		}else if( !regex.test(keyChar) ) {
			event.returnValue = false;
			if(event.preventDefault) event.preventDefault();
		}
	};

	var translateInput = function(e){
		e.preventDefault();
		var number = document.getElementById("number");
		var words = document.getElementById("words");
		if(number.value != ""){
			var newH2 = document.createElement("h2");
			var numberText = numberToWords(number.value).toString();
			var newNumber = document.createTextNode(numberText);
			words.removeChild(words.lastChild);
			newH2.appendChild(newNumber);
			newH2.setAttribute("class", "reveal-text" );
			words.appendChild(newH2);
			number.value = "";
			toggleShow();
			fitText(numberText, newH2);		
		}
	};

	var fitText = function(text, el){
		var sizeStart = 12;
		while(el.offsetHeight < el.scrollHeight || el.offsetWidth < el.scrollWidth){
			sizeStart -= 0.2;
			el.style.fontSize = `${sizeStart}vw`; 
		}
	}
	var catchEscBackspace = function(e){
		var event = e || window.event;
		var key = event.keyCode || event.which;
		if(key == 27 || key == 8) toggleShow();
	};

	var toggleShow = function(){
		var words = document.getElementById("words");
		if(words.classList.contains('show')){
			document.querySelector("body").removeEventListener("keydown", catchEscBackspace);
		}else{
			document.querySelector("body").addEventListener("keydown", catchEscBackspace);
		}
		words.classList.toggle('show');
	};

	document.querySelector("#words .undo").addEventListener("click", toggleShow);
	document.getElementById("number").addEventListener("keypress", validateNumbers);
	document.getElementById("get-text").addEventListener("click", translateInput);
})
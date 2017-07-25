document.addEventListener("DOMContentLoaded", function(event) { 
	var validateNumbers = function(e) {
		var event = e || window.event;
		var key = event.keyCode || event.which;
		var keyChar;
		keyChar = String.fromCharCode( key );
		var regex = /[0-9]|\./;
		if(key == 13){
			translateInput(e);
		}else if( !regex.test(keyChar) ) {
			event.returnValue = false;
			if(event.preventDefault) event.preventDefault();
		}
	}

	var translateInput = function(e){
		e.preventDefault();
		var number = document.getElementById("number");
		var words = document.getElementById("words");
		if(number.value != ""){
			words.removeChild(words.lastChild);
			var newH2 = document.createElement("h2"); 
			var newNumber = document.createTextNode(numberToWords(number.value).toString()); 
			newH2.appendChild(newNumber);
			newH2.setAttribute("class", "reveal-text" );
			words.appendChild(newH2);
			toggleShow();
			number.value = "";			
		}
	};

	var catchEscBackspace = function(e){
		var event = e || window.event;
		var key = event.keyCode || event.which;
		if(key == 27 || key == 8) toggleShow();
	}

	var toggleShow = function(){
		var words = document.getElementById("words");
		console.log("entro");
		if(words.classList.contains('show')){
			console.log('latiene');
			document.querySelector("body").removeEventListener("keydown", catchEscBackspace);
		}else{
			console.log('nolatiene')
			document.querySelector("body").addEventListener("keydown", catchEscBackspace);
		}
		words.classList.toggle('show');
	};

	document.getElementById("get-text").addEventListener("click", translateInput);

	document.querySelector("#words .undo").addEventListener("click", toggleShow);

	document.getElementById("number").addEventListener("keypress", validateNumbers);
})
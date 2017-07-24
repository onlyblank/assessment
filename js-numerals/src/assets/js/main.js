document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById("get-text").addEventListener("click", function(e){
		e.preventDefault();
		var number = document.getElementById("number");
		var words = document.getElementById("words");
		if(number != ""){
			words.removeChild(words.lastChild);
			var newH2 = document.createElement("h2"); 
  		var newNumber = document.createTextNode(numberToWords(number.value).toString()); 
  		newH2.appendChild(newNumber);
  		newH2.setAttribute("class", "reveal-text" );
			words.appendChild(newH2);
			words.classList.toggle('show');
			number.value = "";
		} 
	});

	document.querySelector("#words .undo").addEventListener("click", function(){
		document.getElementById("words").classList.toggle('show');
	})
})


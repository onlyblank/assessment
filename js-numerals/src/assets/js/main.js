document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById("calcular").addEventListener("click", function(e){
		e.preventDefault();
		var number = document.getElementById("number").value;
		if(number != ""){
			var newH2 = document.createElement("h2"); 
  		var newNumber = document.createTextNode(numberToWords(document.getElementById("number").value).toString()); 
  		newH2.appendChild(newNumber); 
			document.getElementById("words").appendChild(newH2);
		} 
	});
})


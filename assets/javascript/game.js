var userText = document.getElementById("game");

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var wins = 0
var losses = 0
var myGuesses = 9

var yourGuesses = []

document.onkeyup = function(event) {
	
	var ranNum = Math.floor(Math.random() * 26) + 1;
	var computerGuess = letters[ranNum];
	console.log("computer guess: " + computerGuess);

	// var userGuess = event.key;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	yourGuesses.push(userGuess);

	document.getElementById("mine").innerHTML = "My Guesses so far: " + yourGuesses
	document.getElementById("guess").innerHTML = "Guesses Left: " + myGuesses

		if (userGuess != computerGuess) {
			myGuesses -=1
			document.getElementById("guess").innerHTML = "Guesses Left: " + myGuesses


			if (myGuesses == 0) {
				alert("You have lost this round...loser!");
				losses += 1 
				document.getElementById("losses").innerHTML = "Losses: " + losses
				myGuesses = 9;
			 	yourGuesses = [];	
				
			}
			 // else if (myGuesses <= 0){
			 // 	myGuesses = 9;
			 // 	yourGuesses = [];	 
			 // }
		}

		else {
			alert("Psychic Points +1 !");
			wins += 1 
			document.getElementById("wins").innerHTML = "Wins: " + wins 
			myGuesses = 9;
			yourGuesses = [];
		}


}
window.onload = function(event) {
	//on load is a property of window. window is an object. 
	//the term of a function that is the property of a function is a method


	var boxes = document.getElementsByClassName("box");
	var turn = true;
	var button = document.querySelector("button");
	var player_1 = document.getElementById("playTrackerTop");
	var player_2 = document.getElementById("playTrackerBottom");
	var playLog = "";

	var topl = document.getElementById("topl");
	var topm = document.getElementById("topm");
	var topr = document.getElementById("topr");

	for (i = 0; i < boxes.length; i++) {
		boxes[i].onclick = function(event){

			if (topl.innerHTML === "X" && topm.innerHTML === "X" && topr.innerHTML === "X") {
				console.log("working");
				player_1.innerHTML = "Winner!";
				player_2.innerHTML = "";
			} else if (this.innerHTML === "X" || this.innerHTML === "O") {
				player_1.innerHTML = "Try again!";
				player_2.innerHTML = "";
			} else if (turn) {
				turn = false;
				this.innerHTML = "X";
				this.style.color = "rgb(226, 200, 235)";
				player_1.innerHTML = "";
				player_2.innerHTML = "Okay, now it's O's turn.";
			} else {
				turn = true;
				this.innerHTML = "O";
				this.style.color = "rgb(175, 190, 184)";
				player_1.innerHTML = "";
				player_2.innerHTML = "X, you're up!";
			}

			playLog += this.innerHTML;	
			console.log(playLog);
		}
	}

	
		
		// var playLog = "";
		// for (i = 0; i < boxes.length; i++) {
		// playLog += this.innerHTML;

	// for (i = 0, playLog, input; i < boxes.length; i++) {
	// 	var playLog = "";
	// 	var input = boxes.innerHTML; 

	// 	var win1 = 

	// }


		button.onclick = function(event) {
			for (i = 0; i < boxes.length; i++) {
			boxes[i].innerHTML = "";
			player_1.innerHTML = "X always goes first! Make your move.";
			player_2.innerHTML = "";
			playLog = "";
			}		
		console.log("this works")
		}

//final curly brace for window.onload
}
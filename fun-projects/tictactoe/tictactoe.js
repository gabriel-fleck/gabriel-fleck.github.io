//tictactoe

var gameRunning = false;
var boxList = [];
var playerSymbol = "X";
var machineSymbol = "O";

//Game State Control
function StartGame() {
	for (i = 0; i <= 8; i++) {
		boxList[i] = "";
	}
	document.getElementById("result").innerHTML = "";
	RefreshScreen();
	gameRunning = true;
}
StartGame();

function RefreshScreen() {
	for (i = 0; i <= 8; i++) {
		document.getElementById("b" + i).innerHTML = boxList[i];
	}
}

function PlayerWins() {
	RefreshScreen();
	document.getElementById("result").innerHTML = "Quero revanche!";
	gameRunning = false;
}

function MachineWins() {
	RefreshScreen();
	document.getElementById("result").innerHTML = "Voce perdeu, HAHAHA";
	gameRunning = false;
}

function Draw() {
	RefreshScreen();
	
	document.getElementById("result").innerHTML = "Empate, voce nao consegue ne?";
	gameRunning = false;
}

//Buttons Control
function PlayerTurn(a) {
	if (gameRunning) {
		if (boxList[a] == "") {
			boxList[a] = playerSymbol;
		
		
			var boxUsed = 0;
			for (i = 0; i <= 8; i++) {
				if (boxList[i] != "") {
					boxUsed++;
				}
			}
			if (boxUsed <= 9) {
			
				//document.getElementById("result").innerHTML = boxList[a];
				Check(playerSymbol);
			}
			else {
				Draw();
			}
		}
		else {
			document.getElementById("result").innerHTML = "Clique em uma casa nao usada!";
		}
		RefreshScreen();
	}
	
	
}

//AI Control
function MachineTurn() {
	
	RandomOutput();
	
}



function RandomOutput() {
	var randomNumber = Math.floor(Math.random() * 9);
	if (boxList[randomNumber] == "") {
		boxList[randomNumber] = machineSymbol;
		Check(machineSymbol);
	}
	else {
		RandomOutput();
	}
}

function BestOutput() {
	
}

function CheckWinner(a) {
	//Win Combinations
	if (boxList[0] == boxList[1] && boxList[1] == boxList[2] && boxList[2] == a ||
		boxList[3] == boxList[4] && boxList[4] == boxList[5] && boxList[5] == a ||
		boxList[6] == boxList[7] && boxList[7] == boxList[8] && boxList[8] == a ||
		boxList[0] == boxList[3] && boxList[3] == boxList[6] && boxList[6] == a ||
		boxList[1] == boxList[4] && boxList[4] == boxList[7] && boxList[7] == a ||
		boxList[2] == boxList[5] && boxList[5] == boxList[8] && boxList[8] == a ||
		boxList[0] == boxList[4] && boxList[4] == boxList[8] && boxList[8] == a ||
		boxList[2] == boxList[4] && boxList[4] == boxList[6] && boxList[6] == a ) {
			
		return true;
	}
	else {
		return false;
	}
}

function Check(a) {
	//Win Combinations
	if (boxList[0] == boxList[1] && boxList[1] == boxList[2] && boxList[2] == a ||
		boxList[3] == boxList[4] && boxList[4] == boxList[5] && boxList[5] == a ||
		boxList[6] == boxList[7] && boxList[7] == boxList[8] && boxList[8] == a ||
		boxList[0] == boxList[3] && boxList[3] == boxList[6] && boxList[6] == a ||
		boxList[1] == boxList[4] && boxList[4] == boxList[7] && boxList[7] == a ||
		boxList[2] == boxList[5] && boxList[5] == boxList[8] && boxList[8] == a ||
		boxList[0] == boxList[4] && boxList[4] == boxList[8] && boxList[8] == a ||
		boxList[2] == boxList[4] && boxList[4] == boxList[6] && boxList[6] == a ) {
		if (a == playerSymbol) {
			PlayerWins();
		}
		else if (a == machineSymbol) {
			MachineWins();
		}
	}
	else {
		if (a == playerSymbol) {
			MachineTurn();
		}
		else if (a == machineSymbol) {
			
		}
		
		var boxUsed = 0;
		for (i = 0; i <= 8; i++) {
			if (boxList[i] != "") {
				boxUsed++;
			}
		}

		
		
	}
	RefreshScreen();
}

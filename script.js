var playerOne = "";
var playerTwo = "";
var currentPlayer = 1;

startgame();

function playerChoice(choice) {
    if (currentPlayer === 1) {
        playerOne = choice;
        currentPlayer = 2;
        startgame();
    } else {
        playerTwo = choice;
        checkWinner();
    }
}
function startgame() {
    var currentUserElement = document.getElementById('currentUser');

    if (currentPlayer === 1) {
        currentUserElement.innerText = "Speler 1, Kies je optie!";
    } if (currentPlayer === 2) {
        currentUserElement.innerText = "Speler 2, Kies je optie!";
    }
}


function checkWinner() {
    var resultElement = document.getElementById("result");
    var choices = document.getElementById('player-choices');
    if (playerOne === playerTwo) {
        resultElement.innerText = "Gelijkspel!";
    } else if (
        (playerOne === "steen" && playerTwo === "schaar") ||
        (playerOne === "papier" && playerTwo === "steen") ||
        (playerOne === "schaar" && playerTwo === "papier")
    ) {
        resultElement.innerText = "Speler 1 heeft gewonnen!";
    } else {
        resultElement.innerText = "Speler 2 heeft gewonnen!";
    }

    resultElement.style.display = "block";
    choices.style.display = 'none';
    var currentUserElement = document.getElementById('currentUser');
    currentUserElement.style.display = 'none';
}


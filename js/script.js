function getMoveName(moveId) {
    if (moveId == 1) {
        return 'rock';
    } else if (moveId == 2) {
        return 'paper';
    } else if (moveId == 3) {
        return 'scissors';
    } else {
        printMessage('Move: ' + moveId + ' is unknown.');
        return 'unknown move';
    }
}

function displayResult(computerMove, playerMove) {
    console.log('Computer move: ' + computerMove + ',  players move: ' + playerMove);

    if ((computerMove == 'rock' && playerMove == 'rock')
        || (computerMove == 'paper' && playerMove == 'paper')
        || (computerMove == 'scissors' && playerMove == 'scissors')) {
        printMessage('Draw!');
    } else if ((computerMove == 'rock' && playerMove == 'paper')
        || (computerMove == 'paper' && playerMove == 'scissors')
        || (computerMove == 'scissors' && playerMove == 'rock')) {
        printMessage('Player won the round!');
    } else if ((computerMove == 'rock' && playerMove == 'scissors')
        || (computerMove == 'paper' && playerMove == 'rock')
        || (computerMove == 'scissors' && playerMove == 'paper')) {
        printMessage('Player lose the round!');
    }
}

function playGame(playerInput) {
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    printMessage('Computer move is: ' + computerMove);

    let playerMove = getMoveName(playerInput);
    printMessage('Player move is: ' + playerMove);

    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});
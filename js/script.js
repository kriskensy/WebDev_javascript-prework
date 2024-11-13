let playerPointsCounter = 0;
let computerPointsCounter = 0;

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
    //console.log('Computer move: ' + computerMove + ',  players move: ' + playerMove);

    if ((computerMove == 'rock' && playerMove == 'rock')
        || (computerMove == 'paper' && playerMove == 'paper')
        || (computerMove == 'scissors' && playerMove == 'scissors')) {
        printMessage('Draw!');
    } else if ((computerMove == 'rock' && playerMove == 'paper')
        || (computerMove == 'paper' && playerMove == 'scissors')
        || (computerMove == 'scissors' && playerMove == 'rock')) {
        printMessage('Player won the round!');
        playerPointsCounter++;
    } else if ((computerMove == 'rock' && playerMove == 'scissors')
        || (computerMove == 'paper' && playerMove == 'rock')
        || (computerMove == 'scissors' && playerMove == 'paper')) {
        printMessage('Player lose the round!');
        computerPointsCounter++;
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
    //console.log('player counter: ' + playerPointsCounter);
    //console.log('computer counter: ' + computerPointsCounter);

    document.getElementById('computer-points').textContent = computerPointsCounter;
    document.getElementById('player-points').textContent = playerPointsCounter;

    gameWinnerAnnouncement(computerPointsCounter, playerPointsCounter);
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

function pointsCounterReset() {
    playerPointsCounter = 0;
    computerPointsCounter = 0;

    document.getElementById('computer-points').textContent = computerPointsCounter;
    document.getElementById('player-points').textContent = playerPointsCounter;
}

document.getElementById('reset-points').addEventListener('click', function () {
    pointsCounterReset();
    clearMessages();
});

document.getElementById('new-game').addEventListener('click', function () {
    pointsCounterReset();
    clearMessages();
    // showMoveButtons();
    hideGameWinner();
});

// function hideMoveButtons(){
//     document.getElementById('move-buttons').classList.add('hidden-element');
// }

// function showMoveButtons(){
//     document.getElementById('move-buttons').classList.remove('hidden-element');
// }

function showGameWinner() {
    document.getElementById('game-item').classList.add('hidden-element');
    document.getElementById('winner-announcement').classList.remove('hidden-element');
}

function hideGameWinner() {
    document.getElementById('game-item').classList.remove('hidden-element');
    document.getElementById('winner-announcement').classList.add('hidden-element');
}

function gameWinnerAnnouncement(computerPointsCounter, playerPointsCounter) {
    if (computerPointsCounter == 3) {
        document.getElementById('computer-wins').textContent = 'Computer won the game!';
        // hideMoveButtons();
        showGameWinner();
    } else if (playerPointsCounter == 3) {
        document.getElementById('player-wins').textContent = 'Player won the game!';
        // hideMoveButtons();
        showGameWinner();
    } else {
        document.getElementById('computer-wins').textContent = '';
        document.getElementById('player-wins').textContent = '';
    }
}
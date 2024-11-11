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
        printMessage('Player won!');
    } else if ((computerMove == 'rock' && playerMove == 'scissors')
        || (computerMove == 'paper' && playerMove == 'rock')
        || (computerMove == 'scissors' && playerMove == 'paper')) {
        printMessage('Player lose!');
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

printMessage('Computer move is: ' + computerMove);

let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.');
let playerMove = getMoveName(playerInput);

printMessage('Player move is: ' + playerMove);

displayResult(computerMove, playerMove);
{
    let playerPointsCounter = 0;
    let computerPointsCounter = 0;

    const getMoveName = function (moveId) {
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

    const displayResult = function (computerMove, playerMove) {

        if ((computerMove == playerMove)) {
            printMessage('Draw!');
        } else if ((computerMove == 'rock' && playerMove == 'paper')
            || (computerMove == 'paper' && playerMove == 'scissors')
            || (computerMove == 'scissors' && playerMove == 'rock')) {
            printMessage('Player won the round!');
            playerPointsCounter++;
        } else {
            printMessage('Player lose the round!');
            computerPointsCounter++;
        }
    }

    const playGame = function (playerInput) {
        clearMessages();

        let randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);
        printMessage('Computer move is: ' + computerMove);

        const playerMove = getMoveName(playerInput);
        printMessage('Player move is: ' + playerMove);

        displayResult(computerMove, playerMove);

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

    const pointsCounterReset = function () {
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
        hideGameWinner();
    });

    const showGameWinner = function () {
        document.getElementById('game-item').classList.add('hidden-element');
        document.getElementById('winner-announcement').classList.remove('hidden-element');
    }

    const hideGameWinner = function () {
        document.getElementById('game-item').classList.remove('hidden-element');
        document.getElementById('winner-announcement').classList.add('hidden-element');
    }

    const gameWinnerAnnouncement = function (computerPointsCounter, playerPointsCounter) {
        const pointsToWinTheGame = 3;
        if (computerPointsCounter == pointsToWinTheGame) {
            document.getElementById('computer-wins').textContent = 'Computer won the game!';
            showGameWinner();
        } else if (playerPointsCounter == pointsToWinTheGame) {
            document.getElementById('player-wins').textContent = 'Player won the game!';
            showGameWinner();
        } else {
            document.getElementById('computer-wins').textContent = '';
            document.getElementById('player-wins').textContent = '';
        }
    }
}
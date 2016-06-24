$(document).ready(function() {

    var playerOne = 'x'; // recorded in squares array to determine possible winning scenerios
    var playerTwo = 'o';
    var playerOneTurn; // 1 = players turns | 0 = NOT players turn
    var playerTwoTurn;
    var playerOneMessage = 'Player one'; // Displayed (alert) when a possible winning scenerio is TRUE for Player #
    var playerTwoMessage = 'Player two';
    var totalMoves = 0; // Used to determine if game is a tie (max moves is 9)
    var playerOneScore = 0;
    var playerTwoScore = 0;

// -------------------------------------------------------------------------- //

    var squares = { // Varaibles representing Tic Tac Toe tiles
        a1: undefined,
        a2: undefined,
        a3: undefined,
        b1: undefined,
        b2: undefined,
        b3: undefined,
        c1: undefined,
        c2: undefined,
        c3: undefined,
    };

// -------------------------------------------------------------------------- //

    $('.startGame').on('click', function() { // Event listener for startGame button (div)
        $('audio')[0].play(); // Audio for startGame button (div)
        newGame();
        $('.startGame').text('NEW GAME');
    });

// -------------------------------------------------------------------------- //

    $(".box").on("click", function() { // event listener for each tile (each td in table)
        var square = squares[$(this).attr("id")]; // Gets TTT tile (table td) and sees if its empty or not

        if (square === undefined) { // i.e Tile has not been clicked yet
            if (playerOneTurn === 1) { // As determined by newGame function
                $(this).addClass('playerOneColor'); // Adds player color to table td
                squares[$(this).attr("id")] = playerOne; // pushs x to object key that matches table td id (checks for winning combinations)
                totalMoves++; // Adds to total move count (used to determine whether game is a tie if WC not met)
                changePlayersTurn(); // See line 80
                checkWin(playerOne, playerOneMessage); // See line 108
            } else if (playerTwoTurn === 1) {
                $(this).addClass('playerTwoColor');
                squares[$(this).attr("id")] = playerTwo;
                totalMoves++;
                changePlayersTurn();
                checkWin(playerTwo, playerTwoMessage);
            }
        } else {
            alert("You can't move there! Try somewhere else!");
        }
    });

// -------------------------------------------------------------------------- //

    var newGame = function() { // Determines which player goes first
        playerOneTurn = 0;
        playerTwoTurn = 0;
        playerOneScore = 0; // resets score for new game
        playerTwoScore = 0;
        $('.playerOneMessage').text('0'); // resets visual representation of score
        $('.playerTwoMessage').text('0');
        var random = Math.random();
        if (random <= 0.50) {
            alert('Player one will go first!');
            playerOneTurn++;
        } else {
            alert('Player two will go first!');
            playerTwoTurn++;
        }
    };

// -------------------------------------------------------------------------- //

    var changePlayersTurn = function() { // 1 = move | 0 = NO move
        if (playerOneTurn === 1) {
            playerOneTurn--;
            playerTwoTurn++;

        } else if (playerTwoTurn === 1) {
            playerTwoTurn--;
            playerOneTurn++;
        }
    };

// -------------------------------------------------------------------------- //

    var resetSquaresValues = function() {
        squares.a1 = undefined;  // removes 'x' & 'o' (playerOne & playerTwo)
        squares.a2 = undefined;
        squares.a3 = undefined;
        squares.b1 = undefined;
        squares.b2 = undefined;
        squares.b3 = undefined;
        squares.c1 = undefined;
        squares.c2 = undefined;
        squares.c3 = undefined;

    };

// -------------------------------------------------------------------------- //

    var checkWin = function(player, playerMessage) { // Tests for 8 possible winning lines for 'x' & 'o'
        if (((squares.a1 === player) && (squares.a2 === player) && (squares.a3 === player)) ||
            ((squares.b1 === player) && (squares.b2 === player) && (squares.b3 === player)) ||
            ((squares.c1 === player) && (squares.c2 === player) && (squares.c3 === player)) ||
            ((squares.a1 === player) && (squares.b1 === player) && (squares.c1 === player)) ||
            ((squares.a2 === player) && (squares.b2 === player) && (squares.c2 === player)) ||
            ((squares.a3 === player) && (squares.b3 === player) && (squares.c3 === player)) ||
            ((squares.a1 === player) && (squares.b2 === player) && (squares.c3 === player)) ||
            ((squares.a3 === player) && (squares.b2 === player) && (squares.c1 === player))) {
            alert(playerMessage + ' wins!');
            $("td").removeClass();
            totalMoves = 0;
            resetSquaresValues();
            $('audio')[0].play();
            if (playerMessage === playerOneMessage) {
                playerOneScore++;
                $('.playerOneMessage').text(playerOneScore);
            } else if (playerMessage === playerTwoMessage) {
                playerTwoScore++;
                $('.playerTwoMessage').text(playerTwoScore);
            }
        } else if (totalMoves === 9) {
            alert('The game is a tie!');
            $("td").removeClass();
            totalMoves = 0;
            resetSquaresValues();
            $('audio')[0].play();
        }
    };

});

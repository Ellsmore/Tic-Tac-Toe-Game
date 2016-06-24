$(document).ready(function() {

    var PlayerOne = 'x';
    var playerTwo = 'o';
    var playerOneTurn = 0; // 1 = players turns | 0 = NOT players turn
    var playerTwoTurn = 0;

    var totalMoves = 0; // Used to determine if game is a tie (max moves is 9)

    // -------------------------------------------------------------------------- //
    // Varaibles representing Tic Tac Toe tiles
    var squares = {
      a1: undefined,
      a2 : undefined,
      a3 : undefined,
      b1 : undefined,
      b2 : undefined,
      b3 : undefined,
      c1 : undefined,
      c2 : undefined,
      c3 : undefined,
    };
    // -------------------------------------------------------------------------- //

    $('.startGame').on('click', function() {
        var random = Math.random();
        if (random <= 0.50) {
            alert('Player one will go first');
            playerOneTurn++;
        } else {
            alert('Player two will go first');
            playerTwoTurn++;
        }
    });

    $('.a1').on('click', function() {
        if ((a1 !== 'x') && (a1 !== 'o')) {
            if (playerOneTurn === 1) {
                a1 = 'x';
                $(this).html('x');
                totalMoves++;
                checkWin();
                playerOneTurn--;
                playerTwoTurn++;
            } else if (playerTwoTurn === 1) {
                a1 = 'o';
                $(this).html('o');
                totalMoves++;
                checkWin();
                playerTwoTurn--;
                playerOneTurn++;
            }
        }
    });

    $('.a2').on('click', function() {
        if ((a2 !== 'x') && (a2 !== 'o')) {
            if (playerOneTurn === 1) {
                a2 = 'x';
                $(this).html('x');
                totalMoves++;
                checkWin();
                playerOneTurn--;
                playerTwoTurn++;
            } else if (playerTwoTurn === 1) {
                a2 = 'o';
                $(this).html('o');
                totalMoves++;
                checkWin();
                playerTwoTurn--;
                playerOneTurn++;
            }
        }
    });

    $('.a3').on('click', function() {
        if ((a3 !== 'x') && (a3 !== 'o')) {
            if (playerOneTurn === 1) {
                a3 = 'x';
                $(this).html('x');
                totalMoves++;
                checkWin();
                playerOneTurn--;
                playerTwoTurn++;
            } else if (playerTwoTurn === 1) {
                a3 = 'o';
                $(this).html('o');
                totalMoves++;
                checkWin();
                playerTwoTurn--;
                playerOneTurn++;
            }
        }
    });

    $('.b1').on('click', function() {
        if ((b1 !== 'x') && (b1 !== 'o')) {
            if (playerOneTurn === 1) {
                b1 = 'x';
                $(this).html('x');
                totalMoves++;
                checkWin();
                playerOneTurn--;
                playerTwoTurn++;
            } else if (playerTwoTurn === 1) {
                b1 = 'o';
                $(this).html('o');
                totalMoves++;
                checkWin();
                playerTwoTurn--;
                playerOneTurn++;
            }
        }
    });

    $('.b2').on('click', function() {
        if ((b2 !== 'x') && (b2 !== 'o')) {
            if (playerOneTurn === 1) {
                b2 = 'x';
                $(this).html('x');
                totalMoves++;
                checkWin();
                playerOneTurn--;
                playerTwoTurn++;
            } else if (playerTwoTurn === 1) {
                b2 = 'o';
                $(this).html('o');
                totalMoves++;
                checkWin();
                playerTwoTurn--;
                playerOneTurn++;
            }
        }
    });

    $('.b3').on('click', function() {
        if ((b3 !== 'x') && (b3 !== 'o')) {
            if (playerOneTurn === 1) {
                b3 = 'x';
                $(this).html('x');
                totalMoves++;
                checkWin();
                playerOneTurn--;
                playerTwoTurn++;
            } else if (playerTwoTurn === 1) {
                b3 = 'o';
                $(this).html('o');
                totalMoves++;
                checkWin();
                playerTwoTurn--;
                playerOneTurn++;
            }
        }
    });

    $('.c1').on('click', function() {
        if ((c1 !== 'x') && (c1 !== 'o')) {
            if (playerOneTurn === 1) {
                c1 = 'x';
                $(this).html('x');
                totalMoves++;
                checkWin();
                playerOneTurn--;
                playerTwoTurn++;
            } else if (playerTwoTurn === 1) {
                c1 = 'o';
                $(this).html('o');
                totalMoves++;
                checkWin();
                playerTwoTurn--;
                playerOneTurn++;
            }
        }
    });

    $('.c2').on('click', function() {
        if ((c2 !== 'x') && (c2 !== 'o')) {
            if (playerOneTurn === 1) {
                c2 = 'x';
                $(this).html('x');
                totalMoves++;
                checkWin();
                playerOneTurn--;
                playerTwoTurn++;
            } else if (playerTwoTurn === 1) {
                c2 = 'o';
                $(this).html('o');
                checkWin();
                playerTwoTurn--;
                playerOneTurn++;
            }
        }
    });

    $('.c3').on('click', function() {
        if ((c3 !== 'x') && (c3 !== 'o')) {
            if (playerOneTurn === 1) {
                c3 = 'x';
                $(this).html('x');
                totalMoves++;
                checkWin();
                playerOneTurn--;
                playerTwoTurn++;
            } else if (playerTwoTurn === 1) {
                c3 = 'o';
                $(this).html('o');
                totalMoves++;
                checkWin();
                playerTwoTurn--;
                playerOneTurn++;
            }
        }
    });

    // -------------------------------------------------------------------------- //

    var changePlayersTurn = function() { //it works
        if (playerOneTurn === 1) {
            playerOneTurn--;

        } else if (playerTwoTurn === 1) {
            playerTwoTurn--;
        }
    };

    // -------------------------------------------------------------------------- //

    var checkWin = function() { // Tests for 8 possible winning lines for 'x' & 'o'
        if (((a1 === 'x') && (a2 === 'x') && (a3 === 'x')) || ((b1 === 'x') && (b2 === 'x') && (b3 === 'x')) ||
            ((c1 === 'x') && (c2 === 'x') && (c3 === 'x')) || ((a1 === 'x') && (b1 === 'x') && (c1 === 'x')) ||
            ((a2 === 'x') && (b2 === 'x') && (c2 === 'x')) || ((a3 === 'x') && (b3 === 'x') && (c3 === 'x')) ||
            ((a1 === 'x') && (b2 === 'x') && (c3 === 'x')) || ((a3 === 'x') && (b2 === 'x') && (c1 === 'x'))) {
            alert('Player one wins');
            $("td").empty();
            totalMoves = 0;
        } else if (((a1 === 'o') && (a2 === 'o') && (a3 === 'o')) || ((b1 === 'o') && (b2 === 'o') && (b3 === 'o')) ||
            ((c1 === 'o') && (c2 === 'o') && (c3 === 'o')) || ((a1 === 'o') && (b1 === 'o') && (c1 === 'o')) ||
            ((a2 === 'o') && (b2 === 'o') && (c2 === 'o')) || ((a3 === 'o') && (b3 === 'o') && (c3 === 'o')) ||
            ((a1 === 'o') && (b2 === 'o') && (c3 === 'o')) || ((a3 === 'o') && (b2 === 'o') && (c1 === 'o'))) {
            alert('Player two wins');
            $("td").empty();
            totalMoves = 0;
        } else if (totalMoves === 9)
            alert('The game is a tie!');
            $("td").empty();
            totalMoves = 0;
    };

});

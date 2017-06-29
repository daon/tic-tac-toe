export const BOARD_LENGTH = 9;
export const _ = 0;
export const X = 1;
export const O = 2;

function isNumber(value) {
    return (typeof value === 'number') && isFinite(value);
}

export function createGame(board, activeTurn) {
    board = board || [
        _, _, _,
        _, _, _,
        _, _, _
    ];   

    if (!Array.isArray(board)) {        
        throw new Error(`Invalid board type: ${typeof board}`);
    }

    activeTurn = activeTurn || X;

    if (!isNumber(activeTurn)) {
        throw new Error(`Invalid activeTurn type: ${typeof activeTurn}`);
    }

    if (board.length < BOARD_LENGTH || board.length > BOARD_LENGTH) {
        throw new Error(`Invalid board length: ${board.length}`);
    }

    let crossCount = 0;
    let noughtCount = 0;
    let availableMoves = [];
    board.forEach((value, position) => {
        if (!isNumber(value)) {
            throw new Error(`Invalid board value type: ${typeof value} at position: ${position}`)
        }

        if (value !== _ && value !== X && value !== O) {
            throw new Error(`Invalid board value: ${value}`);
        }

        if (value === X) {
            crossCount++;
        }

        if (value === O) {
            noughtCount++;
        }

        if (value === _) {
            availableMoves.push(position);
        }
    });

    if ((crossCount - noughtCount) > 1) {
        throw new Error(`Invalid number of X count`);
    }

    if ((noughtCount - crossCount) > 1) {
        throw new Error(`Invalid number of O count`);
    }

    if (crossCount > noughtCount) {
        activeTurn = O;
    }
    if (noughtCount > crossCount) {
        activeTurn = X;
    }

    const threeInRow = (player) => {
        return (board[0] === player && board[1] === player && board[2] == player) ||
            (board[3] === player && board[4] === player && board[5] === player) ||
            (board[6] === player && board[7] === player && board[8] === player);
    }

    const threeInCol = (player) => {
        return (board[0] === player && board[3] === player && board[6] === player) ||
            (board[1] === player && board[4] === player && board[7] === player) ||
            (board[2] === player && board[5] === player && board[8] === player);
    }

    const threeInDig = (player) => {
        return (board[0] === player && board[4] === player && board[8] === player) ||
            (board[2] === player && board[4] === player && board[6] === player);
    }

    let winner = 0;
    if (threeInRow(X) || threeInCol(X) || threeInDig(X)) {
        winner = X;
    } else if (threeInRow(O) || threeInCol(O) || threeInDig(O)) {
        winner = O;
    }
    
    activeTurn = winner > 0 ? 0 : activeTurn;

    return {
        getBoard: () => board,
        getAvailableMoves: () => availableMoves,
        getActiveTurn: () => activeTurn,
        isWinner: (player) => {
            if (!isNumber(player)) {
                throw new Error(`Invalid player type: ${typeof player}`);
            }

            return player === winner;
        },
        getNewState: (move) => {
            if (!isNumber(move)) {
                throw new Error(`Invalid move type: ${typeof move}`);
            }

            if (move < 0 || move >= BOARD_LENGTH || !availableMoves.some(availableMove => availableMove === move)) {
                throw new Error(`Invalid move position: ${move}`);
            }

            if (winner > 0) {
                throw new Error(`Invalid move, game over.`);
            }

            board[move] = activeTurn;
            let newState;

            try {
                newState = createGame(board);
            } catch(e) {
                throw e;
            }
            return newState;
        } 
    };
}
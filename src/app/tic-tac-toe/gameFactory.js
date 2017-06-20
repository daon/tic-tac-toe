export const BOARD_LENGTH = 9;
export const _ = 0;
export const X = 1;
export const O = 2;

export function createGame(board, activeTurn) {
    if (typeof board !== 'undefined' && !Array.isArray(board)) {
        throw new Error(`Invalid board type: ${typeof board}`);
    }

    if (typeof activeTurn !== 'undefined' && typeof activeTurn !== 'number' || (typeof activeTurn === 'number' && isNaN(activeTurn))) {
        throw new Error(`Invalid activeTurn type: ${typeof activeTurn}`);
    }

    board = board || [
        _, _, _,
        _, _, _,
        _, _, _
    ];

    if (board.length < BOARD_LENGTH || board.length > BOARD_LENGTH) {
        throw new Error(`Invalid board length: ${board.length}`);
    }

    let crossCount = 0;
    let noughtCount = 0;
    let availableMoves = [];
    board.forEach((value, position) => {
        if (typeof value !== 'number' || isNaN(value)) {
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

    activeTurn = activeTurn || X;
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

    return {
        getBoard: () => board,
        getAvailableMoves: () => availableMoves,
        getActiveTurn: () => activeTurn,
        isWinner: (player) => {
            if (typeof player !== 'undefined' && typeof player !== 'number' || (typeof player === 'number' && isNaN(player))) {
                throw new Error(`Invalid player type: ${typeof player}`);
            }

            return player === winner;
        }
    };
}
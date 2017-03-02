export const BOARD_LENGTH = 9;
export const EMPTY = 0;
export const CROSS = 1;
export const NOUGHT = 2;

export function createGame(board, activeTurn) {
    if (typeof board !== 'undefined' && !Array.isArray(board)) {
        throw new Error(`Invalid board type: ${typeof board}`);
    }

    if (typeof activeTurn !== 'undefined' && typeof activeTurn !== 'number' || (typeof activeTurn === 'number' && isNaN(activeTurn))) {
        throw new Error(`Invalid activeTurn type: ${typeof activeTurn}`);
    }

    board = board || [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
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

        if (value !== EMPTY && value !== CROSS && value !== NOUGHT) {
            throw new Error(`Invalid board value: ${value}`);
        }

        if (value === CROSS) {
            crossCount++;
        }

        if (value === NOUGHT) {
            noughtCount++;
        }

        if (value === EMPTY) {
            availableMoves.push(position);
        }
    });

    if ((crossCount - noughtCount) > 1) {
        throw new Error(`Invalid number of cross count`);
    }

    if ((noughtCount - crossCount) > 1) {
        throw new Error(`Invalid number of nought count`);
    }


    activeTurn = activeTurn || CROSS;
    if (crossCount > noughtCount) {
        activeTurn = NOUGHT;
    }
    if (noughtCount > crossCount) {
        activeTurn = CROSS;
    }


    return {
        getBoard: () => board,
        getAvailableMoves: () => availableMoves,
        getActiveTurn: () => activeTurn
    };
}
import { EMPTY } from './board';

export function getNextComputerMove(board) {
    let emptyPositions = board
        .map((cell, position) => {
            if (cell === EMPTY) {
                return position;
            }
            return null;
        })
        .filter(position => position !== null);

    let data = {};
    if (emptyPositions.length > 0) {
        data.position = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
    }

    return data;
}
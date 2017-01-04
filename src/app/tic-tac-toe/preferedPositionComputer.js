import { EMPTY } from './board';

export const PREFERED_POSITIONS = [
    4, 0, 2, 6, 8, 1, 3, 5, 7
];

export function getNextComputerMove(board) {
    
    let data = {};
    let preferedPositions = PREFERED_POSITIONS
        .filter(position => board[position] === EMPTY); 

    if (preferedPositions.length > 0) {
        data.position = preferedPositions[0];
    }

    return data;
}
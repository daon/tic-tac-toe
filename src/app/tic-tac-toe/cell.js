export const EMPTY_CELL = 0;
export const CROSS_CELL = 1;
export const NOUGHT_CELL = 2;
export const ACTIVE_CROSS_CELL = 3
export const ACTIVE_NOUGHT_CELL = 4

export const CELL_STATES = [
    { name: 'EMPTY_CELL', value: EMPTY_CELL },
    { name: 'CROSS_CELL', value: CROSS_CELL },
    { name: 'NOUGHT_CELL', value: NOUGHT_CELL },
    { name: 'ACTIVE_CROSS_CELL', value: ACTIVE_CROSS_CELL },
    { name: 'ACTIVE_NOUGHT_CELL', value: ACTIVE_NOUGHT_CELL }
];

export function isValidCellState(state) {
    return state === EMPTY_CELL || 
        state === CROSS_CELL || 
        state === NOUGHT_CELL ||
        state === ACTIVE_CROSS_CELL || 
        state === ACTIVE_NOUGHT_CELL;
}

export function isChangeableCellState(state, newState) {
    return isValidCellState(state) && isValidCellState(newState) && state !== newState &&
        (state === EMPTY_CELL && (newState === CROSS_CELL || newState ===  NOUGHT_CELL));
}

export function getActiveCellState(state) {
    return state === CROSS_CELL ? ACTIVE_CROSS_CELL : ACTIVE_NOUGHT_CELL;
}
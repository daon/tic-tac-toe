'use strict';
import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';

import { CELL_STATES, CROSS_CELL, NOUGHT_CELL } from './cell';
import { createBoard, BOARD_SIZE, EMPTY_BOARD } from './board';

export const BOARD_STATES = [
    {
        name: 'EMPTY_BOARD', 
        value: EMPTY_BOARD
    }
];

describe('Board', () => {
    
    BOARD_STATES.forEach(boardState => {
        describe(`Given a board with the state: '${boardState.name}'`, () => {
            let board;

            beforeEach(() => {
                board = createBoard(boardState.value);
            });

            describe('When calling getState()', () => {

                it('Then the returned value should be an array', () => {
                    expect(board.getState()).to.be.a('array');
                });

                it(`Then the returned value should have a length of ${BOARD_SIZE}`, () => {
                    expect(board.getState()).to.have.lengthOf(BOARD_SIZE);
                });
            });

            CELL_STATES.forEach(cellState => {
                describe(`When calling changeCell(0, 0, ${cellState.name})`, () => {
                    it(`Then the returned value should be a boolean`, () => {
                        expect(board.changeCellState(0, 0, cellState.value)).to.be.a('boolean');
                    });
                    
                    let validCellStateInput = cellState.value === CROSS_CELL || cellState.value === NOUGHT_CELL;
                    it(`Then the returned value should be equal to ${validCellStateInput}`, () => {
                        expect(board.changeCellState(0, 0, cellState.value)).to.equal(validCellStateInput);
                    });
                }); 
            });
        });
    });

});
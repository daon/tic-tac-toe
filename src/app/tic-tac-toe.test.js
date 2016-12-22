'use strict';
import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { createGame } from './tic-tac-toe';

describe('Canary', () => {
    it('works', () => {
        expect(true).to.equal(true)
    });
}); 

describe('Tic Tac Toe', () => {

    describe('Two Player Game', () => {
        let game;
        const validCells = [
            [0, 0], [0, 1], [0, 2],
            [1, 0], [1, 1], [1, 2],
            [2, 0], [2, 1], [2, 2]
        ];
        const someInvalidCells = [
            [-1, 0], [-1, 1], [-1, 2],
            [0, -1], [3, -11], [234, 23423],
            [-234, 0], [2342, 1], [42, 2]   
        ];


        beforeEach(() => {
            game = createGame();
        })

        it("board is empty at the start", () => {
            expect(game.getBoard().join('')).to.equal('');
        });

        it('player one begins', () => {
            expect(game.getCurrentPlayer()).to.equal(1);
        });

        validCells.forEach(([row, col]) => {
            it(`given row: ${row} and col: ${col} placeChecker(row, col) should return true`, () => {
                expect(game.placeChecker(0, 0)).to.equal(true); 
            });
        });

        someInvalidCells.forEach(([row, col]) => {
            it(`given row: ${row} and col: ${col} placeChecker(row, col) should return false`, () => {
                expect(game.placeChecker(-1, 2)).to.equal(false);
            });
        });

        it('placing a checker at same position twice should return false', () => {
            game.placeChecker(0, 0);
            expect(game.placeChecker(0, 0)).to.equal(false);
        });

        it('player one place X on board', () => {
            
        });
    });

});
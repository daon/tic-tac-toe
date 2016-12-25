'use strict';
import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { createGame, PLAYER_ONE, EMPTY_CELL, CHECKER_ONE, CHECKER_TWO } from './tic-tac-toe';
import { VALID_CELLS, SOME_INVALID_CELLS, SOME_GAMES } from './testdata';

describe('Canary', () => {
    it('works', () => {
        expect(true).to.equal(true)
    });
}); 

describe('Tic Tac Toe', () => {

    describe('Two Player Game', () => {
        let game;

        beforeEach(() => {
            game = createGame();
        })

        it("board is empty at the start", () => {
            expect(game.getBoard().join(EMPTY_CELL)).to.equal(EMPTY_CELL);
        });

        it('player one begins', () => {
            expect(game.getCurrentPlayer()).to.equal(PLAYER_ONE);
        });

        VALID_CELLS.forEach(([row, column]) => {
            it(`given row: ${row} and column: ${column} then placeChecker(row, column) should return true`, () => {
                expect(game.placeChecker(row, column)).to.equal(true); 
            });
        });

        SOME_INVALID_CELLS.forEach(([row, column]) => {
            it(`given row: ${row} and column: ${column} then placeChecker(row, column) should return false`, () => {
                expect(game.placeChecker(row, column)).to.equal(false);
            });
        });

        it('placing a checker at same position twice should return false', () => {
            game.placeChecker(0, 0);
            expect(game.placeChecker(0, 0)).to.equal(false);
        });

        it(`player one place ${CHECKER_ONE}:es on the board`, () => {
            game.placeChecker(0, 0);
            expect(game.getBoard()[0]).to.equal(CHECKER_ONE);
        });

        it(`player two place ${CHECKER_TWO}:s on the board`, () => {
            game.placeChecker(0, 0);
            game.placeChecker(0, 1);
            expect(game.getBoard()[1]).to.equal(CHECKER_TWO);
        });

        it("given no winner getWinner() should return null", () => {
            expect(game.getWinner()).to.equal(null);
        });

        SOME_GAMES.forEach(({ winner, winningMove, result, moves }) => {
            it(`given ${winner} has ${winningMove} then getWinner() should return ${result}`, () => {
                moves.forEach(([row, column]) => {
                    game.placeChecker(row, column);
                });

                expect(game.getWinner()).to.equal(result);
            })
        });

        it('given a player has won then placeChecker(row, column) should return false', () => {
            game.placeChecker(0, 0);
            game.placeChecker(1, 0);
            game.placeChecker(0, 1);
            game.placeChecker(1, 1);
            game.placeChecker(0, 2);
            
            expect(game.placeChecker(1, 2)).to.equal(false);
        });

    });

});
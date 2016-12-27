'use strict';
import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { state } from './tic-tac-toe.state';
import { model, EMPTY_CELL, PLAYER_ONE, PLAYER_TWO, CHECKER_ONE, CHECKER_TWO } from './tic-tac-toe.model';
import { actions } from './tic-tac-toe.actions';
import { VALID_CELLS, SOME_INVALID_CELLS, SOME_GAMES } from './testdata';


describe('Canary', () => {
    it('works', () => {
        expect(true).to.equal(true)
    });
}); 

describe('Tic Tac Toe', () => {
    describe('Two Player Game', () => {
        beforeEach(() => {
            let mockView = {
                display: (representation) => representation,
                init: (model) => '',
                game: (model) => ''
            };
            state.init(mockView);
            model.init(state);
            actions.init(model.present);
        })

        it("given a new game then all the cells should be empty", () => {
            expect(model.cells.every(cell => cell === EMPTY_CELL)).to.equal(true);
        });

        it(`given a new game then player ${PLAYER_ONE} should begin`, () => {
            expect(model.currentPlayer).to.equal(PLAYER_ONE);
        });

        it(`given player ${PLAYER_ONE} place a checker in a cell it should contain ${CHECKER_ONE}`, () => {
            actions.placeChecker({ position: 0 });

            expect(model.cells[0]).to.equal(CHECKER_ONE);
        });

        it(`given player ${PLAYER_TWO} place a checker in a cell it should contain ${CHECKER_TWO}`, () => {
            model.currentPlayer = PLAYER_TWO;

            actions.placeChecker({ position: 0 });

            expect(model.cells[0]).to.equal(CHECKER_TWO);
        });

        it(`given player ${PLAYER_ONE} has placed a checker then current player should be player ${PLAYER_TWO}`, () => {
            actions.placeChecker({ position: 0 });

            expect(model.currentPlayer).to.equal(PLAYER_TWO);
        });

        VALID_CELLS.forEach(position => {
            it(`given a player place a checker at the position ${position} then the cell should not be empty`, () => {
                actions.placeChecker({ position: position });
                expect(model.cells[position]).to.not.equal(EMPTY_CELL); 
            });
        });

        SOME_INVALID_CELLS.forEach(position => {
            it(`given a player place a checker at the position ${position} then all the cells should be empty`, () => {
                actions.placeChecker({ position: position });

                expect(model.cells.every(cell => cell === EMPTY_CELL)).to.equal(true);
            });
        });

        it(`given a player tries to place a ${CHECKER_TWO} in a cell with a ${CHECKER_ONE} then the cell should still contain ${CHECKER_ONE}`, () => {
            actions.placeChecker({ position: 0 });
            actions.placeChecker({ position: 0 });

            expect(model.cells[0]).to.equal(CHECKER_ONE);
        });

        it(`given a player tries to place a ${CHECKER_ONE} in a cell with a ${CHECKER_TWO} then the cell should still contain ${CHECKER_TWO}`, () => {
            actions.placeChecker({ position: 0 });
            actions.placeChecker({ position: 1 });
            actions.placeChecker({ position: 1 });

            expect(model.cells[1]).to.equal(CHECKER_TWO);
        });

    });

});
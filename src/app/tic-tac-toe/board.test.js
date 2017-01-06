'use strict';
import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { EMPTY, CROSS, NOUGHT } from './cell';
import { createCell } from './cell';
import { createBoard } from './board';

describe('Board', () => {
    let testData = [
        { 
            cells: [ 
                { value: EMPTY, activated: false },  
                { value: EMPTY, activated: false },  
                { value: EMPTY, activated: false },
                { value: EMPTY, activated: false },  
                { value: EMPTY, activated: false },  
                { value: EMPTY, activated: false },
                { value: EMPTY, activated: false },  
                { value: EMPTY, activated: false },  
                { value: EMPTY, activated: false }  
            ]
        },
        { cells: [{  }]}
    ];
    
    describe(`Given empty board`, () => {
        let board;

        beforeEach(() => {
            board = createBoard(testData[0].cells);
        })

        describe('When calling getCells()', () => {

            it('Then the returned value should be an array', () => {
                expect(board.getCells()).to.be.a('array');
            });

            it('Then the returned value should have a length of 9', () => {
                expect(board.getCells()).to.have.lengthOf(9);
            });

            it(`Then the return value should only contains cells with the value: '${EMPTY}'`, () => {
                expect(board.getCells().every(cell => cell.getValue() === EMPTY)).to.equal(true);
            });

            it(`Then the return value should only contains inactive cells`, () => {
                expect(board.getCells().every(cell => !cell.isActivated())).to.equal(true);
            });
        });

        describe('When calling isEmpty()', () => {

            it('Then the returned value should be a boolean', () => {
                expect(board.isEmpty()).to.be.a('boolean');
            })

            it('Then the returned value should be equal to true', () => {
                expect(board.isEmpty()).to.equal(true);
            });

        });

        describe(`When calling setCellValue(0, ${CROSS})`, () => {

            it('Then the returned value should be a boolean', () => {
                expect(board.setCellValue(0, CROSS)).to.be.a('boolean');
            });

            it('Then the returned value should be equal to true', () => {
                expect(board.setCellValue(0, CROSS)).to.equal(true);
            });

        });

        describe(`When calling setCellValue(0, ${NOUGHT})`, () => {

            it('Then the returned value should be a boolean', () => {
                expect(board.setCellValue(0, NOUGHT)).to.be.a('boolean');
            });

            it('Then the returned value should be equal to true', () => {
                expect(board.setCellValue(0, NOUGHT)).to.equal(true);
            });

        });

    });

});
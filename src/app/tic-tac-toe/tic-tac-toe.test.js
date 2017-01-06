// 'use strict';
// import { describe, it, beforeEach } from 'mocha';
// import { expect } from 'chai';
// import { createBoard } from './board';

// const INVALID_INPUT = 'invalid_input';

// describe('Canary', () => {
//     it('works', () => {
//         expect(true).to.equal(true)
//     });
// }); 

// describe('Tic Tac Toe', () => {

//     describe('board', () => {

//         describe('getCells', () => {

//             it('given an empty board when calling getCells() then it should return an array', () => {
//                 let board = createBoard();
//                 expect(board.getCells()).to.be.a('array');
//             });

//             it('given an empty board when calling getCells() then the returning array should have a length of 9', () => {
//                 let board = createBoard();
//                 expect(board.getCells()).to.have.lengthOf(9);
//             });

//             it('given an empty board then ')

//         });
      
//         // let board;

//         // beforeEach(() => {
//         //     board = createBoard();
//         // });

//         // it('should be an object', () => {
//         //     expect(board).to.be.a('object');
//         // });

//         // describe('getCells', () => {
//         //     it('should return an array', () => {
//         //         expect(board.getCells()).to.be.a('array');
//         //     });

//         //     it('should have a length of 9', () => {
//         //         expect(board.getCells().length).to.equal(9);
//         //     });
//         // });

//         // describe('isCell', () => {
//         //     it('should return true if it is a cell', () => {
//         //         expect(isCell(board[0])).to.equal(true);
//         //     });

//         //     it('should return false if position is outside the board', () => {
//         //         expect(isCell(board[-1])).to.equal(false);
//         //     });

//         //     it('should return false if cell is undefined', () => {
//         //         expect(isCell()).to.equal(false);
//         //     });

//         //     it('should return false if cell is null', () => {
//         //         expect(isCell(null)).to.equal(false);
//         //     });

//         //     it('should return false if cell is an empty object', () => {
//         //         expect(isCell({})).to.equal(false);
//         //     });
//         // })

//         // describe('isEmptyCell', () => {
            
//         //     it('should return true if cell is empty', () => {
//         //         expect(isEmptyCell(board[0])).to.equal(true);
//         //     });

//         //     it('should return false if cell is not empty', () => {
//         //         board[0].setValue(CROSS);
//         //         expect(isEmptyCell(board[0])).to.equal(false);
//         //     });

//         //     it('should return false if position is outside the board', () => {
//         //         expect(isEmptyCell(board[-1])).to.equal(false);
//         //     });
//         // });

//         // describe('isCheckedCell', () => {
//         //     it(`should return true if cell contains ${CROSS}`, () => {
//         //         board[0].value = CROSS;
//         //         expect(isCheckedCell(board[0])).to.equal(true);
//         //     });

//         //     it(`should return true if cell contains ${NOUGHT}`, () => {
//         //         board[0].value = NOUGHT;
//         //         expect(isCheckedCell(board[0])).to.equal(true);
//         //     });

//         //     it(`should return false if cell is empty`, () => {
//         //         expect(isCheckedCell(board[0])).to.equal(false);
//         //     });

//         //     it('should return false if position is outside the board', () => {
//         //         expect(isCheckedCell(board[-1])).to.equal(false);
//         //     });
//         // });

//         // describe('countCheckers', () => {

//         //     it(`should return 0 if board is empty and counting ${CROSS}`, () => {
//         //         expect(countCheckers(board, CROSS)).to.equal(0);
//         //     });

//         //     it(`should return 0 if board is empty and counting ${NOUGHT}`, () => {
//         //         expect(countCheckers(board, NOUGHT)).to.equal(0);
//         //     });

//         //     it(`should return 3 if board contains 3 ${CROSS} and 2 ${NOUGHT} and counting ${CROSS}`, () => {
//         //         board[0].value = CROSS;
//         //         board[1].value = NOUGHT;
//         //         board[4].value = NOUGHT;
//         //         board[5].value = CROSS;
//         //         board[7].value = CROSS;
//         //         expect(countCheckers(board, CROSS)).to.equal(3);
//         //     });

//         //     it(`should return 2 if board contains 3 ${CROSS} and 2 ${NOUGHT} and counting ${NOUGHT}`, () => {
//         //         board[0].value = CROSS;
//         //         board[1].value = NOUGHT;
//         //         board[4].value = NOUGHT;
//         //         board[5].value = CROSS;
//         //         board[7].value = CROSS;
//         //         expect(countCheckers(board, NOUGHT)).to.equal(2);
//         //     });

//         // });

//         // describe('isFullBoard', () => {

//         //     it('should return true when every cell is checked', () => {
//         //         board = [CROSS, NOUGHT, NOUGHT, CROSS, NOUGHT, CROSS, NOUGHT, CROSS, NOUGHT];
//         //         expect(isFullBoard(board)).to.equal(true);
//         //     });

//         //     it('should return false when every cell is empty', () => {
//         //         expect(isFullBoard(board)).to.equal(false);
//         //     });

//         //     it('should return false when some cells are checked', () => {
//         //         board[0] = CROSS;
//         //         board[1] = NOUGHT;
//         //         board[4] = NOUGHT;
//         //         board[5] = CROSS;
//         //         board[7] = CROSS;
//         //         expect(isFullBoard(board)).to.equal(false);
//         //     });

//         // });

//         // describe('getCurrentPlayer', () => {
            
//         //     it(`should return ${USER} when board is empty`, () => {
//         //         expect(getCurrentPlayer(board)).to.equal(USER);
//         //     });

//         //     it(`should return ${USER} when board contains equal amount of ${CROSS} and ${NOUGHT}`, () => {
//         //         board[0] = CROSS;
//         //         board[1] = NOUGHT;
//         //         expect(getCurrentPlayer(board)).to.equal(USER);
//         //     });

//         //     it(`should return ${COMPUTER} when board contains different amount of ${CROSS} and ${NOUGHT}`, () => {
//         //         board[0] = CROSS;
//         //         expect(getCurrentPlayer(board)).to.equal(COMPUTER);
//         //     });
//         // });

//         // describe('getComputerChecker', () => {
            
//         //     it(`should return "${EMPTY}" when board is empty`, () => {
//         //         expect(getComputerChecker(board)).to.equal(EMPTY);
//         //     });

//         //     it(`should return "${EMPTY}" when board contains equal amount of ${CROSS} and ${NOUGHT}`, () => {
//         //         board[0] = CROSS;
//         //         board[1] = NOUGHT;
//         //         expect(getComputerChecker(board)).to.equal(EMPTY);
//         //     });

//         //     it(`should return ${CROSS} when board contains less amount of ${CROSS} then ${NOUGHT}`, () => {
//         //         board[0] = NOUGHT;
//         //         expect(getComputerChecker(board)).to.equal(CROSS);
//         //     });

//         //     it(`should return ${NOUGHT} when board contains less amount of ${NOUGHT} then ${CROSS}`, () => {
//         //         board[0] = CROSS;
//         //         expect(getComputerChecker(board)).to.equal(NOUGHT);
//         //     });
//         // });

//         // describe('getWinningPositions', () => {
            
//         //     it('should return an array', () => {
//         //         expect(getWinningPositions(board)).to.be.a('array');
//         //     });

//         //     it('should have a length of 0 when board is empty', () => {
//         //         expect(getWinningPositions(board).length).to.equal(0);
//         //     });
                        
//         //     it(`should have a length of 0 when board contains checkers but not in winning positions`, () => {
//         //         board[0] = CROSS;
//         //         board[1] = NOUGHT;
//         //         board[2] = CROSS;
//         //         expect(getWinningPositions(board).length).to.equal(0);
//         //     });

//         //     it(`should have a length of 3 when board have three of the same checker in a row`, () => {
//         //         board[0] = CROSS;
//         //         board[1] = CROSS;
//         //         board[2] = CROSS;
//         //         expect(getWinningPositions(board).length).to.equal(3);
//         //     });

//         //     it(`should have a length of 3 when board have three of the same checker in a column`, () => {
//         //         board[0] = CROSS;
//         //         board[3] = CROSS;
//         //         board[6] = CROSS;
//         //         expect(getWinningPositions(board).length).to.equal(3);
//         //     });

//         //     it(`should have a length of 3 when board have three of the same checker in a diagnoal`, () => {
//         //         board[0] = CROSS;
//         //         board[4] = CROSS;
//         //         board[8] = CROSS;
//         //         expect(getWinningPositions(board).length).to.equal(3);
//         //     });
//         // });

//         // describe('isWinner', () => {
//         //     it('should be false when board is empty', () => {
//         //         expect(isWinner(board, CROSS)).to.equal(false);
//         //     });

//         //     it(`should  be false when board contains checkers but not in winning positions`, () => {
//         //         board[0] = CROSS;
//         //         board[1] = NOUGHT;
//         //         board[2] = CROSS;
//         //         expect(isWinner(board, CROSS)).to.equal(false);
//         //     });

//         //     it('should be true when board is contains winning positions for given checker', () => {
//         //         board[0] = CROSS;
//         //         board[1] = CROSS;
//         //         board[2] = CROSS;
//         //         expect(isWinner(board, CROSS)).to.equal(true);
//         //     });

//         //     it('should be false when board is contains winning positions but not for given checker', () => {
//         //         board[0] = CROSS;
//         //         board[1] = CROSS;
//         //         board[2] = CROSS;
//         //         expect(isWinner(board, NOUGHT)).to.equal(false);
//         //     });
//         // });

//         // describe('isLoser', () => {
//         //     it('should be false when board is empty', () => {
//         //         expect(isLoser(board, CROSS)).to.equal(false);
//         //     });

//         //     it(`should  be false when board contains checkers but not in winning positions`, () => {
//         //         board[0] = CROSS;
//         //         board[1] = NOUGHT;
//         //         board[2] = CROSS;
//         //         expect(isLoser(board, CROSS)).to.equal(false);
//         //     });

//         //     it('should be false when board is contains winning positions for given checker', () => {
//         //         board[0] = CROSS;
//         //         board[1] = CROSS;
//         //         board[2] = CROSS;
//         //         expect(isLoser(board, CROSS)).to.equal(false);
//         //     });

//         //     it('should be true when board is contains winning positions but not for given checker', () => {
//         //         board[0] = CROSS;
//         //         board[1] = CROSS;
//         //         board[2] = CROSS;
//         //         expect(isLoser(board, NOUGHT)).to.equal(true);
//         //     });
//         // });

//     });  
// });
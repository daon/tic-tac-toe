// 'use strict';
// import { describe, it, beforeEach } from 'mocha';
// import { expect } from 'chai';
// import { createCell, EMPTY_CELL, CROSS_CELL, NOUGHT_CELL, ACTIVE_CROSS_CELL, ACTIVE_NOUGHT_CELL } from './cell';

// const INVALID_INPUT = 'invalid_input';

// export const CELL_STATES = [
//     { name: 'EMPTY_CELL', value: EMPTY_CELL },
//     { name: 'CROSS_CELL', value: CROSS_CELL },
//     { name: 'NOUGHT_CELL', value: NOUGHT_CELL },
//     { name: 'ACTIVE_CROSS_CELL', value: ACTIVE_CROSS_CELL },
//     { name: 'ACTIVE_NOUGHT_CELL', value: ACTIVE_NOUGHT_CELL }
// ];

// describe('Cell', () => {

//     CELL_STATES.forEach(cellState => {
//         describe(`Given a cell with state: '${cellState.name}'`, () => {
//             let cell;

//             beforeEach(() => {
//                 cell = createCell(cellState.value);
//             });

//             describe('When calling getState()', () => {

//                 it(`Then the returned state should be a number`, () => {
//                     expect(cell.getState()).to.be.a('number');
//                 });

//                 it(`Then the returned state should be equal to '${cellState.name}'`, () => {
//                     expect(cell.getState()).to.equal(cellState.value);
//                 });

//             });

//             describe(`When calling changeState()`, () => {
                
//                 it('Then the returned value should be a boolean', () => {
//                     expect(cell.changeState()).to.be.a('boolean');
//                 });

//                 it(`Then the returned value should be equal to false`, () => {
//                     expect(cell.changeState()).to.equal(false);
//                 });

//             });

//             describe(`When calling changeState(null)`, () => {
                
//                 it('Then the returned value should be a boolean', () => {
//                     expect(cell.changeState(null)).to.be.a('boolean');
//                 });

//                 it(`Then the returned value should be equal to false`, () => {
//                     expect(cell.changeState(null)).to.equal(false);
//                 });

//             });

//             describe(`When calling changeState(EMPTY_CELL)`, () => {
                
//                 it('Then the returned value should be a boolean', () => {
//                     expect(cell.changeState(EMPTY_CELL)).to.be.a('boolean');
//                 });

//                 it(`Then the returned value should be equal to false`, () => {
//                     expect(cell.changeState(EMPTY_CELL)).to.equal(false);
//                 });

//             });

//             describe(`When calling changeState(CROSS_CELL)`, () => {
                
//                 it('Then the returned value should be a boolean', () => {
//                     expect(cell.changeState(CROSS_CELL)).to.be.a('boolean');
//                 });

//                 it(`Then the returned value should be equal to ${cellState.value  === EMPTY_CELL}`, () => {
//                     expect(cell.changeState(CROSS_CELL)).to.equal(cellState.value  === EMPTY_CELL);
//                 });

//             });

//             describe(`When calling changeState(NOUGHT)`, () => {
                
//                 it('Then the returned value should be a boolean', () => {
//                     expect(cell.changeState(NOUGHT_CELL)).to.be.a('boolean');
//                 });

//                 it(`Then the returned value should be equal to ${cellState.value  === EMPTY_CELL}`, () => {
//                     expect(cell.changeState(NOUGHT_CELL)).to.equal(cellState.value  === EMPTY_CELL);
//                 });

//             });

//             describe(`When calling changeState(INVALID_INPUT)`, () => {
                
//                 it('Then the returned value should be a boolean', () => {
//                     expect(cell.changeState(INVALID_INPUT)).to.be.a('boolean');
//                 });

//                 it(`Then the returned value should be equal to false`, () => {
//                     expect(cell.changeState(INVALID_INPUT)).to.equal(false);
//                 });

//             });

//             // describe('When calling isActivated()', () => {
            
//             //     it(`Then the returned value should be a boolean`, () => {
//             //         expect(cell.isActivated()).to.be.a('boolean');
//             //     });

//             //     it(`Then the returned value should be equal to ${data.activated}`, () => {
//             //         expect(cell.isActivated()).to.equal(data.activated);
//             //     });
            
//             // });

//             // describe('When calling activate()', () => {
                
//             //     it(`Then the returned value should be a boolean`, () => {
//             //         expect(cell.activate()).to.be.a('boolean');
//             //     });

//             //     it(`Then the returned value should be equal to true`, () => {
//             //         expect(cell.activate()).to.equal(true);
//             //     });

//             // });

//         });
//     })
// });
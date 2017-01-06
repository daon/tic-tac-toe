'use strict';
import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { createCell, EMPTY, CROSS, NOUGHT } from './cell';

const INVALID_INPUT = 'invalid_input';

describe('Cell', () => {
    let testData = [
        { value: EMPTY, activated: false },
        { value: EMPTY, activated: true },
        { value: CROSS, activated: false },
        { value: CROSS, activated: true },
        { value: NOUGHT, activated: false },
        { value: NOUGHT, activated: true }
    ]

    testData.forEach(data => {
        describe(`Given a cell with value: '${data.value}' and activated: ${data.activated}`, () => {
            let cell;

            beforeEach(() => {
                cell = createCell(data.value, data.activated);
            });

            describe('When calling getValue()', () => {

                it(`Then the returned value should be a string`, () => {
                    expect(cell.getValue()).to.be.a('string');
                });

                it(`Then the returned value should be equal to '${data.value}'`, () => {
                    expect(cell.getValue()).to.equal(data.value);
                });

            });

            describe(`When calling setValue()`, () => {
                
                it('Then the returned value should be a boolean', () => {
                    expect(cell.setValue()).to.be.a('boolean');
                });

                it(`Then the returned value should be equal to false`, () => {
                    expect(cell.setValue()).to.equal(false);
                });

            });

            describe(`When calling setValue(null)`, () => {
                
                it('Then the returned value should be a boolean', () => {
                    expect(cell.setValue(null)).to.be.a('boolean');
                });

                it(`Then the returned value should be equal to false`, () => {
                    expect(cell.setValue(null)).to.equal(false);
                });

            });

            describe(`When calling setValue('${EMPTY}')`, () => {
                
                it('Then the returned value should be a boolean', () => {
                    expect(cell.setValue(EMPTY)).to.be.a('boolean');
                });

                it(`Then the returned value should be equal to false`, () => {
                    expect(cell.setValue(EMPTY)).to.equal(false);
                });

            });

            describe(`When calling setValue('${CROSS}')`, () => {
                
                it('Then the returned value should be a boolean', () => {
                    expect(cell.setValue(CROSS)).to.be.a('boolean');
                });

                it(`Then the returned value should be equal to ${data.value  === EMPTY}`, () => {
                    expect(cell.setValue(CROSS)).to.equal(data.value  === EMPTY);
                });

            });

            describe(`When calling setValue('${NOUGHT}')`, () => {
                
                it('Then the returned value should be a boolean', () => {
                    expect(cell.setValue(NOUGHT)).to.be.a('boolean');
                });

                it(`Then the returned value should be equal to ${data.value  === EMPTY}`, () => {
                    expect(cell.setValue(NOUGHT)).to.equal(data.value  === EMPTY);
                });

            });

            describe(`When calling setValue('${INVALID_INPUT}')`, () => {
                
                it('Then the returned value should be a boolean', () => {
                    expect(cell.setValue(INVALID_INPUT)).to.be.a('boolean');
                });

                it(`Then the returned value should be equal to false`, () => {
                    expect(cell.setValue(INVALID_INPUT)).to.equal(false);
                });

            });

            describe('When calling isActivated()', () => {
            
                it(`Then the returned value should be a boolean`, () => {
                    expect(cell.isActivated()).to.be.a('boolean');
                });

                it(`Then the returned value should be equal to ${data.activated}`, () => {
                    expect(cell.isActivated()).to.equal(data.activated);
                });
            
            });

            describe('When calling activate()', () => {
                
                it(`Then the returned value should be a boolean`, () => {
                    expect(cell.activate()).to.be.a('boolean');
                });

                it(`Then the returned value should be equal to true`, () => {
                    expect(cell.activate()).to.equal(true);
                });

            });

        });
    })
});
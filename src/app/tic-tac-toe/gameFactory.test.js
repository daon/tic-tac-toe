import test from 'tape';
import { createGame, EMPTY, CROSS, NOUGHT } from './gameFactory';

test('createGame function input type', assert => {
    const inputs = [
        {},
        null,
        17,
        'Array',
        true,
        false,
        { __proto__: Array.prototype }
    ];

    inputs.forEach(input => {
        const actual = () => createGame(input);
        const expected = new RegExp(`Invalid board type: ${typeof input}`);
        assert.throws(actual, expected);
    });

    assert.end();
});

test('createGame function input array min length', assert => {
    const input = [];
    const actual = () => createGame(input);
    const expected = new RegExp(`Invalid board length: ${input.length}`);
    assert.throws(actual, expected);
    assert.end();
});

test('createGame function input array max length', assert => {
    const input = [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY, EMPTY
    ];

    const actual = () => createGame(input);
    const expected = new RegExp(`Invalid board length: ${input.length}`);

    assert.throws(actual, expected);

    assert.end();
});

test('createGame function input array element type', assert => {
    const elements = [undefined, null, {}, 'string', [], NaN, true, false];

    elements.forEach(element => {
        const input = [
            element, EMPTY, EMPTY,
            EMPTY, EMPTY, EMPTY,
            EMPTY, EMPTY, EMPTY
        ];
        const actual = () => createGame(input);
        const expected = new RegExp(`Invalid board value type: ${typeof element} at position: 0`);
        assert.throws(actual, expected);
    });

    assert.end();
});

test('createGame function input array element', assert => {
    const element = 3;
    const input = [
        element, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
    ];

    const actual = () => createGame(input);
    const expected = new RegExp(`Invalid board value: ${element}`);
    assert.throws(actual, expected);

    assert.end();
});

test('createGame function input array cross count', assert => {
    const input = [
        CROSS, CROSS, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
    ];

    const actual = () => createGame(input);
    const expected = new RegExp(`Invalid number of cross count`);
    assert.throws(actual, expected);

    assert.end();
});

test('createGame function input array nought count', assert => {
    const input = [
        CROSS, EMPTY, NOUGHT,
        NOUGHT, EMPTY, NOUGHT,
        EMPTY, EMPTY, EMPTY
    ];

    const actual = () => createGame(input);
    const expected = new RegExp(`Invalid number of nought count`);
    assert.throws(actual, expected);

    assert.end();
});

test('createGame function output type', assert => {
    const actual = typeof createGame();
    const expected = 'object';

    assert.equal(actual, expected,
        'createGame() should return an object');

    assert.end();
});
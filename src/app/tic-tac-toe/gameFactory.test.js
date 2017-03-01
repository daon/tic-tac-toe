import test from 'tape';
import { createGame, EMPTY, CROSS, NOUGHT, BOARD_LENGTH } from './gameFactory';

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

test('createGame function output', assert => {
    const game = createGame();

    assert.ok(game.hasOwnProperty('getBoard'),
        'createGame() output should have a property named "getBoard"');

    assert.ok(game.hasOwnProperty('getAvailableMoves'),
        'createGame() output should have a property named "getAvailableMoves"');

    assert.end();
});

test('getBoard property type', assert => {
    const game = createGame();
    const actual = typeof game.getBoard;
    const expected = 'function';

    assert.equal(actual, expected,
        'getBoard type should be a function')

    assert.end();
});

test('getBoard property output type', assert => {
    const game = createGame();

    assert.ok(Array.isArray(game.getBoard()),
        'getBoard output type should be an array')

    assert.end();
});

test('getBoard property output array length', assert => {
    const game = createGame();
    const actual = game.getBoard().length;
    const expected = BOARD_LENGTH;

    assert.deepEqual(actual, expected,
        `getBoard output array length should be ${BOARD_LENGTH}`);

    assert.end();
});

test('getBoard property output array', assert => {
    const game = createGame();
    const actual = game.getBoard();
    const expected = [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
    ];

    assert.deepEqual(actual, expected,
        'getBoard output array should be an board');

    actual[1] = CROSS;

    assert.notDeepEqual(actual, expected,
        'getBoard output array should not change game board state');

    assert.end();
});

test('getAvailableMoves property type', assert => {
    const game = createGame();
    const actual = typeof game.getAvailableMoves;
    const expected = 'function';

    assert.equal(actual, expected,
        'getAvailableMoves type should be a function')

    assert.end();
});


test('getAvailableMoves property output type', assert => {
    const game = createGame();

    assert.ok(Array.isArray(game.getAvailableMoves()),
        'getAvailableMoves output type should be an array')

    assert.end();
});

test('getAvailableMoves property output array', assert => {
    const input = [
        CROSS, EMPTY, NOUGHT,
        NOUGHT, EMPTY, CROSS,
        EMPTY, EMPTY, EMPTY
    ];
    const game = createGame(input);
    const actual = game.getAvailableMoves();
    const expected = [1, 4, 6, 7, 8];

    assert.deepEqual(actual, expected,
        `getAvailableMoves output array should be empty cell positions`);

    actual[0] = 2;

    assert.notDeepEqual(actual, expected,
        'getAvailableMoves output array should not change game board state');

    assert.end();
});

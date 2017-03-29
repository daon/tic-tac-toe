import test from 'tape';
import { createGame, EMPTY, CROSS, NOUGHT, BOARD_LENGTH } from './gameFactory';

test()

test('createGame function input board type', assert => {
    const boards = [
        {},
        null,
        17,
        'Array',
        true,
        false,
        { __proto__: Array.prototype }
    ];

    boards.forEach(board => {
        const actual = () => createGame(board);
        const expected = new RegExp(`Invalid board type: ${typeof board}`);
        assert.throws(actual, expected);
    });

    assert.end();
});

test('createGame function input activeTurn type', assert => {
    const activeTurns = [
        {},
        null,
        NaN,
        [],
        'Array',
        true,
        false,
        { __proto__: Array.prototype }
    ];

    activeTurns.forEach(activeTurn => {
        const actual = () => createGame(undefined, activeTurn);
        const expected = new RegExp(`Invalid activeTurn type: ${typeof activeTurn}`);
        assert.throws(actual, expected);
    });

    assert.end();
});


test('createGame function input board min length', assert => {
    const board = [];
    const actual = () => createGame(board);
    const expected = new RegExp(`Invalid board length: ${board.length}`);
    assert.throws(actual, expected);
    assert.end();
});

test('createGame function input board max length', assert => {
    const board = [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY, EMPTY
    ];

    const actual = () => createGame(board);
    const expected = new RegExp(`Invalid board length: ${board.length}`);

    assert.throws(actual, expected);

    assert.end();
});

test('createGame function input board element type', assert => {
    const elements = [undefined, null, {}, 'string', [], NaN, true, false];

    elements.forEach(element => {
        const board = [
            element, EMPTY, EMPTY,
            EMPTY, EMPTY, EMPTY,
            EMPTY, EMPTY, EMPTY
        ];
        const actual = () => createGame(board);
        const expected = new RegExp(`Invalid board value type: ${typeof element} at position: 0`);
        assert.throws(actual, expected);
    });

    assert.end();
});

test('createGame function input board element', assert => {
    const element = 3;
    const board = [
        element, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
    ];

    const actual = () => createGame(board);
    const expected = new RegExp(`Invalid board value: ${element}`);
    assert.throws(actual, expected);

    assert.end();
});

test('createGame function input board cross count', assert => {
    const board = [
        CROSS, CROSS, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
    ];

    const actual = () => createGame(board);
    const expected = new RegExp(`Invalid number of cross count`);
    assert.throws(actual, expected);

    assert.end();
});

test('createGame function input board nought count', assert => {
    const board = [
        CROSS, EMPTY, NOUGHT,
        NOUGHT, EMPTY, NOUGHT,
        EMPTY, EMPTY, EMPTY
    ];

    const actual = () => createGame(board);
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

    assert.ok(game.hasOwnProperty('getActiveTurn'),
        'createGame() output should have a property named "getActiveTurn"');

    assert.ok(game.hasOwnProperty('isWinner'),
        'createGame() output should have a property named "isWinner"');


    assert.end();
});

test('getBoard property type', assert => {
    const game = createGame();
    const actual = typeof game.getBoard;
    const expected = 'function';

    assert.equal(actual, expected,
        'getBoard type should be a function');

    assert.end();
});

test('getBoard property output type', assert => {
    const game = createGame();

    assert.ok(Array.isArray(game.getBoard()),
        'getBoard output type should be an array');

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
        'getAvailableMoves type should be a function');

    assert.end();
});


test('getAvailableMoves property output type', assert => {
    const game = createGame();

    assert.ok(Array.isArray(game.getAvailableMoves()),
        'getAvailableMoves output type should be an array');

    assert.end();
});

test('getAvailableMoves property output array', assert => {
    const board = [
        CROSS, EMPTY, NOUGHT,
        NOUGHT, EMPTY, CROSS,
        EMPTY, EMPTY, EMPTY
    ];
    const game = createGame(board);
    const actual = game.getAvailableMoves();
    const expected = [1, 4, 6, 7, 8];

    assert.deepEqual(actual, expected,
        `getAvailableMoves output array should be empty cell positions`);

    actual[0] = 2;

    assert.notDeepEqual(actual, expected,
        'getAvailableMoves output array should not change game board state');

    assert.end();
});

test('getActiveTurn property type', assert => {
    const game = createGame();
    const actual = typeof game.getActiveTurn;
    const expected = 'function';

    assert.equal(actual, expected,
        'getActiveTurn type should be a function');

    assert.end();
});

test('getActiveTurn property output type', assert => {
    const game = createGame();

    const actual = typeof game.getActiveTurn();
    const expected = 'number';

    assert.equal(actual, expected,
        'getActiveTurn output type should be a number');

    assert.end();
});

test('getActiveTurn property output', assert => {
    let board = [
        CROSS, EMPTY, NOUGHT,
        NOUGHT, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
    ];
    let game = createGame(board);

    let actual = game.getActiveTurn();
    let expected = CROSS;

    assert.equal(actual, expected,
        `getActiveTurn output should be ${CROSS} when nought count is greater then cross count`);

    board = [
        CROSS, EMPTY, NOUGHT,
        CROSS, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
    ];
    game = createGame(board);

    actual = game.getActiveTurn();
    expected = NOUGHT;

    assert.equal(actual, expected,
        `getActiveTurn output should be ${NOUGHT} when cross count is greater then nought count`);

    game = createGame();

    actual = game.getActiveTurn();
    expected = CROSS;

    assert.equal(actual, expected,
        `getActiveTurn output should be ${CROSS} when cross count is equal to nought count`);

    game = createGame(undefined, NOUGHT);

    actual = game.getActiveTurn();
    expected = NOUGHT;

    assert.equal(actual, expected,
        `getActiveTurn output should be ${NOUGHT} when cross count is equal to nought count`);

    board = [
        CROSS, EMPTY, NOUGHT,
        NOUGHT, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
    ];
    game = createGame(board, NOUGHT);

    actual = game.getActiveTurn();
    expected = CROSS;

    assert.equal(actual, expected,
        `getActiveTurn output should be ${CROSS} when nought count is greater then cross count`);

    assert.end();
});

test('isWinner property type', assert => {
    const game = createGame();

    const actual = typeof game.isWinner;
    const expected = 'function';

    assert.equal(actual, expected,
        'isWinner type should be a function');

    assert.end();
});

test('isWinner property input player type', assert => {
    const players = [
        {},
        null,
        NaN,
        [],
        'Array',
        true,
        false,
        { __proto__: Array.prototype }
    ];

    players.forEach(player => {
        const game = createGame();
        const actual = () => game.isWinner(player);
        const expected = new RegExp(`Invalid player type: ${typeof player}`);
        assert.throws(actual, expected);
    });

    assert.end();
});

test('isWinner property output type', assert => {
    const game = createGame();

    const actual = typeof game.isWinner(CROSS);
    const expected = 'boolean';

    assert.equal(actual, expected,
        'isWinner output type should be an boolean');

    assert.end();
});

test('isWinner property output', assert => {
    let board = [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
    ];
    let game = createGame(board);

    let actual = game.isWinner(CROSS);
    let expected = false;

    assert.equal(actual, expected,
        `isWinner(${CROSS}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(NOUGHT);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${NOUGHT}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        CROSS, CROSS, CROSS,
        NOUGHT, NOUGHT, EMPTY,
        EMPTY, EMPTY, EMPTY
    ];
    game = createGame(board);

    actual = game.isWinner(CROSS);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${CROSS}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(NOUGHT);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${NOUGHT}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        NOUGHT, EMPTY, NOUGHT,
        CROSS, CROSS, CROSS,
        EMPTY, EMPTY, EMPTY
    ];
    game = createGame(board);

    actual = game.isWinner(CROSS);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${CROSS}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(NOUGHT);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${NOUGHT}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        NOUGHT, EMPTY, NOUGHT,
        EMPTY, EMPTY, EMPTY,
        CROSS, CROSS, CROSS
    ];
    game = createGame(board);

    actual = game.isWinner(CROSS);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${CROSS}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(NOUGHT);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${NOUGHT}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        CROSS, NOUGHT, EMPTY,
        CROSS, NOUGHT, EMPTY,
        CROSS, EMPTY, EMPTY
    ];
    game = createGame(board);

    actual = game.isWinner(CROSS);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${CROSS}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(NOUGHT);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${NOUGHT}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        NOUGHT, CROSS, NOUGHT,
        EMPTY, CROSS, EMPTY,
        EMPTY, CROSS, EMPTY
    ];
    game = createGame(board);

    actual = game.isWinner(CROSS);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${CROSS}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(NOUGHT);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${NOUGHT}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        NOUGHT, EMPTY, CROSS,
        EMPTY, EMPTY, CROSS,
        NOUGHT, EMPTY, CROSS
    ];
    game = createGame(board);

    actual = game.isWinner(CROSS);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${CROSS}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(NOUGHT);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${NOUGHT}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        CROSS, EMPTY, NOUGHT,
        EMPTY, CROSS, EMPTY,
        NOUGHT, EMPTY, CROSS
    ];
    game = createGame(board);

    actual = game.isWinner(CROSS);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${CROSS}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(NOUGHT);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${NOUGHT}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        NOUGHT, NOUGHT, CROSS,
        EMPTY, CROSS, EMPTY,
        CROSS, EMPTY, EMPTY
    ];
    game = createGame(board);

    actual = game.isWinner(CROSS);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${CROSS}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(NOUGHT);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${NOUGHT}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);


    assert.end();
});
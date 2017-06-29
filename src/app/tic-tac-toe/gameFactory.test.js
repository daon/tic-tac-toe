import test from 'tape';
import { createGame, _, X, O, BOARD_LENGTH } from './gameFactory';

test('createGame function input board type', assert => {
    const boards = [
        {},
        17,
        'Array',
        true,
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
        [],
        'Array',
        true,
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
        _, _, _,
        _, _, _,
        _, _, _, _
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
            element, _, _,
            _, _, _,
            _, _, _
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
        element, _, _,
        _, _, _,
        _, _, _
    ];

    const actual = () => createGame(board);
    const expected = new RegExp(`Invalid board value: ${element}`);
    assert.throws(actual, expected);

    assert.end();
});

test('createGame function input board X count', assert => {
    const board = [
        X, X, _,
        _, _, _,
        _, _, _
    ];

    const actual = () => createGame(board);
    const expected = new RegExp(`Invalid number of X count`);
    assert.throws(actual, expected);

    assert.end();
});

test('createGame function input board O count', assert => {
    const board = [
        X, _, O,
        O, _, O,
        _, _, _
    ];

    const actual = () => createGame(board);
    const expected = new RegExp(`Invalid number of O count`);
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
        _, _, _,
        _, _, _,
        _, _, _
    ];

    assert.deepEqual(actual, expected,
        'getBoard output array should be an board');

    actual[1] = X;

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
        X, _, O,
        O, _, X,
        _, _, _
    ];
    const game = createGame(board);
    const actual = game.getAvailableMoves();
    const expected = [1, 4, 6, 7, 8];

    assert.deepEqual(actual, expected,
        `getAvailableMoves output array should be _ cell positions`);

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
        X, _, O,
        O, _, _,
        _, _, _
    ];
    let game = createGame(board);

    let actual = game.getActiveTurn();
    let expected = X;

    assert.equal(actual, expected,
        `getActiveTurn output should be ${X} when O count is greater then X count`);

    board = [
        X, _, O,
        X, _, _,
        _, _, _
    ];
    game = createGame(board);

    actual = game.getActiveTurn();
    expected = O;

    assert.equal(actual, expected,
        `getActiveTurn output should be ${O} when X count is greater then O count`);

    game = createGame();

    actual = game.getActiveTurn();
    expected = X;

    assert.equal(actual, expected,
        `getActiveTurn output should be ${X} when X count is equal to O count`);

    game = createGame(undefined, O);

    actual = game.getActiveTurn();
    expected = O;

    assert.equal(actual, expected,
        `getActiveTurn output should be ${O} when X count is equal to O count`);

    board = [
        X, _, O,
        O, _, _,
        _, _, _
    ];
    game = createGame(board, O);

    actual = game.getActiveTurn();
    expected = X;

    assert.equal(actual, expected,
        `getActiveTurn output should be ${X} when O count is greater then X count`);

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

    const actual = typeof game.isWinner(X);
    const expected = 'boolean';

    assert.equal(actual, expected,
        'isWinner output type should be an boolean');

    assert.end();
});

test('isWinner property output', assert => {
    let board = [
        _, _, _,
        _, _, _,
        _, _, _
    ];
    let game = createGame(board);

    let actual = game.isWinner(X);
    let expected = false;

    assert.equal(actual, expected,
        `isWinner(${X}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(O);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${O}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        X, X, X,
        O, O, _,
        _, _, _
    ];
    game = createGame(board);

    actual = game.isWinner(X);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${X}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(O);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${O}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        O, _, O,
        X, X, X,
        _, _, _
    ];
    game = createGame(board);

    actual = game.isWinner(X);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${X}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(O);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${O}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        O, _, O,
        _, _, _,
        X, X, X
    ];
    game = createGame(board);

    actual = game.isWinner(X);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${X}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(O);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${O}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        X, O, _,
        X, O, _,
        X, _, _
    ];
    game = createGame(board);

    actual = game.isWinner(X);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${X}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(O);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${O}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        O, X, O,
        _, X, _,
        _, X, _
    ];
    game = createGame(board);

    actual = game.isWinner(X);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${X}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(O);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${O}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        O, _, X,
        _, _, X,
        O, _, X
    ];
    game = createGame(board);

    actual = game.isWinner(X);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${X}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(O);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${O}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        X, _, O,
        _, X, _,
        O, _, X
    ];
    game = createGame(board);

    actual = game.isWinner(X);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${X}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(O);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${O}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    board = [
        O, O, X,
        _, X, _,
        X, _, _
    ];
    game = createGame(board);

    actual = game.isWinner(X);
    expected = true;

    assert.equal(actual, expected,
        `isWinner(${X}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);

    actual = game.isWinner(O);
    expected = false;

    assert.equal(actual, expected,
        `isWinner(${O}) output should be ${expected} when board is ${JSON.stringify(board, null, 2)}`);


    assert.end();
});

test('getNewState property type', assert => {
    const game = createGame();

    const actual = typeof game.getNewState;
    const expected = 'function';

    assert.equal(actual, expected,
        'getNewState type should be a function');

    assert.end();
});

test('getNewState property input move type', assert => {
    const moves = [
        {},
        null,
        NaN,
        [],
        'Array',
        true,
        false,
        { __proto__: Array.prototype }
    ];

    moves.forEach(move => {
        const game = createGame();
        const actual = () => game.getNewState(move);
        const expected = new RegExp(`Invalid move type: ${typeof move}`);
        assert.throws(actual, expected);
    });

    assert.end();
});

test('getNewState property input move position', assert => {
    const moves = [
        -1,
        12,
        0,
        4
    ];

    const board = [
        X, _, _,
        _, O, _,
        _, _, _
    ];
        
    moves.forEach(move => {
        const game = createGame(board);
        const actual = () => game.getNewState(move);
        const expected = new RegExp(`Invalid move position: ${move}`);
        assert.throws(actual, expected);
    });

    assert.end();
});

test('getNewState property output type', assert => {
    const game = createGame();
    const actual = typeof game.getNewState(1);
    const expected = 'object';

    assert.equal(actual, expected,
        'getNewState() should return an object');

    assert.end();
});

test('getNewState property output', assert => {
    const board = [
        _, _, _,
        _, _, _,
        _, _, _
    ];
    let game = createGame(board);

    game = game.getNewState(0);

    assert.ok(game.hasOwnProperty('getBoard'),
        'getNewState() output should have a property named "getBoard"');

    assert.ok(game.hasOwnProperty('getAvailableMoves'),
        'getNewState() output should have a property named "getAvailableMoves"');

    assert.ok(game.hasOwnProperty('getActiveTurn'),
        'getNewState() output should have a property named "getActiveTurn"');

    assert.ok(game.hasOwnProperty('isWinner'),
        'getNewState() output should have a property named "isWinner"');

    assert.ok(game.hasOwnProperty('getNewState'),
        'getNewState() output should have a property named "getNewState"');

    let actual = game.getBoard();
    let expected = [
        X, _, _,
        _, _, _,
        _, _, _
    ];

    assert.deepEqual(actual, expected,
        'getNewState() board is correct');

    game = game.getNewState(1);
    actual = game.getBoard();
    expected = [
        X, O, _,
        _, _, _,
        _, _, _
    ];

    assert.deepEqual(actual, expected,
        'getNewState() board is correct');


    game = game.getNewState(3);
    actual = game.getBoard();
    expected = [
        X, O, _,
        X, _, _,
        _, _, _
    ];

    assert.deepEqual(actual, expected,
        'getNewState() board is correct');


    game = game.getNewState(4);
    actual = game.getBoard();
    expected = [
        X, O, _,
        X, O, _,
        _, _, _
    ];

    assert.deepEqual(actual, expected,
        'getNewState() board is correct');

    game = game.getNewState(6);
    actual = game.getBoard();
    expected = [
        X, O, _,
        X, O, _,
        X, _, _
    ];

    assert.deepEqual(actual, expected,
        'getNewState() board is correct');

    assert.ok(game.isWinner(X));

    actual = () => game.getNewState(7);
    expected = new RegExp(`Invalid move, game over.`);
    
    assert.throws(actual, expected);

    assert.end();
});
export const VALID_CELLS = [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]
];
export const SOME_INVALID_CELLS = [
    [-1, 0], [-1, 1], [-1, 2],
    [0, -1], [3, -11], [234, 23423],
    [-234, 0], [2342, 1], [42, 2]   
];

export const SOME_GAMES = [
    {
        winner: 'player 1',
        winningMove: 'three in a row',
        result: 0,
        moves: [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
            [0, 2]
        ]
    },
    {
        winner: 'player 1',
        winningMove: 'three in a column',
        result: 0,
        moves: [
            [0, 0],
            [1, 1],
            [1, 0],
            [1, 2],
            [2, 0]
        ]
    },
    {
        winner: 'player 1',
        winningMove: 'three in a diagonal',
        result: 0,
        moves: [
            [0, 0],
            [1, 0],
            [1, 1],
            [1, 2],
            [2, 2]
        ]
    },
    {
        winner: 'player 2',
        winningMove: 'three in a row',
        result: 1,
        moves: [
            [0, 0],
            [1, 0],
            [2, 1],
            [1, 1],
            [0, 2],
            [1, 2]
        ]
    },
    {
        winner: 'player 2',
        winningMove: 'three in a column',
        result: 1,
        moves: [
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 1],
            [2, 0],
            [2, 1]
        ]
    },
    {
        winner: 'player 2',
        winningMove: 'three in a diagonal',
        result: 1,
        moves: [
            [0, 0],
            [0, 2],
            [0, 1],
            [1, 1],
            [2, 2],
            [2, 0]
        ]
    }
];
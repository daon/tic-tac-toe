export const VALID_CELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const SOME_INVALID_CELLS = [-1, -200, 9, 123, 12312, 31231];

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
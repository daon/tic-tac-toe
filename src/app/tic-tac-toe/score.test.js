import test from 'tape';
import { X, O } from './gameFactory';
import score from './score';

const createMockGame = (winner) => {
    winner = winner || 0;
    return { 
        isWinner: (player) => player === winner
    };
};

test('score', assert => {
    let game = createMockGame();

    let actual = score(game);
    let expected = 0;

    assert.equal(actual, expected, 
        `score returns 0 if there is no winner.`);

    game = createMockGame(X);
    
    actual = score(game);
    expected = 10;

    assert.equal(actual, expected, 
        `score returns 10 if X is winner.`);

    game = createMockGame(O);
    
    actual = score(game);
    expected = -10;

    assert.equal(actual, expected, 
        `score returns -10 if O is winner.`);

    assert.end();
});

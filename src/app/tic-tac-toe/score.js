import { X, O } from './gameFactory';

export default function score(game) {
    if (game.isWinner(X)) {
        return 10;
    }

    if (game.isWinner(O)) {
        return -10;
    }

    return 0;
}
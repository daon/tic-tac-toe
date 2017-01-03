/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/tic-tac-toe";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createEmptyBoard = createEmptyBoard;
exports.isEmptyCell = isEmptyCell;
exports.isCheckedCell = isCheckedCell;
exports.countCheckers = countCheckers;
exports.isFullBoard = isFullBoard;
exports.getCurrentPlayer = getCurrentPlayer;
exports.getComputerChecker = getComputerChecker;
exports.getWinningPositions = getWinningPositions;
exports.isWinner = isWinner;
exports.isLoser = isLoser;
var BOARD_SIZE = exports.BOARD_SIZE = 3;
var EMPTY = exports.EMPTY = '';
var CROSS = exports.CROSS = 'X';
var NOUGHT = exports.NOUGHT = 'O';
var USER = exports.USER = 0;
var COMPUTER = exports.COMPUTER = 1;
var WINNING_POSITIONS = exports.WINNING_POSITIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function createEmptyBoard() {
    return new Array(BOARD_SIZE * BOARD_SIZE).fill(EMPTY);
}

function isEmptyCell(board, position) {
    return board[position] === EMPTY;
}

function isCheckedCell(board, position) {
    return board[position] === CROSS || board[position] === NOUGHT;
}

function countCheckers(board, checker) {
    return board.filter(function (cell) {
        return cell === checker;
    }).length;
}

function isFullBoard(board) {
    return board.every(function (checker, position) {
        return isCheckedCell(board, position);
    });
}

function getCurrentPlayer(board) {
    if (countCheckers(board, CROSS) === countCheckers(board, NOUGHT)) {
        return USER;
    }
    return COMPUTER;
}

function getComputerChecker(board) {
    var crosses = countCheckers(board, CROSS);
    var noughts = countCheckers(board, NOUGHT);
    if (crosses < noughts) {
        return CROSS;
    } else if (noughts < crosses) {
        return NOUGHT;
    }
    return EMPTY;
}

function getWinningPositions(board) {
    return WINNING_POSITIONS.filter(function (positions) {
        return isCheckedCell(board, positions[0]) && board[positions[0]] === board[positions[1]] && board[positions[0]] === board[positions[2]];
    }).reduce(function (a, b) {
        return a.concat(b);
    }, []);
}

function isWinner(board, checker) {
    var winningPositions = getWinningPositions(board);
    if (winningPositions.length === 0) {
        return false;
    }

    return board[winningPositions[0]] === checker;
}

function isLoser(board, checker) {
    var winningPositions = getWinningPositions(board);
    if (winningPositions.length === 0) {
        return false;
    }

    return board[winningPositions[0]] !== checker;
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var actions = exports.actions = {};

actions.init = function (present) {
    return actions.present = present;
};

actions.setUserChecker = function (data, present) {
    console.log('action: setUserChecker');
    present = present || actions.present;
    data = data || {};
    present(data);
    return false;
};

actions.userMove = function (data, present) {
    console.log('action: userMove');
    present = present || actions.present;
    data = data || {};
    present(data);
    return false;
};

actions.computerMove = function (data, present) {
    console.log('action: computerMove');
    present = present || actions.present;
    data = data || {};
    var d = data;
    var p = present;
    setTimeout(function () {
        p(d);
    }, 1000);
};

actions.reset = function (data, present) {
    console.log('action: reset');
    present = present || actions.present;
    data = data || {};
    data.reseting = true;
    var d = data;
    var p = present;
    setTimeout(function () {
        p(d);
    }, 1000);
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _ticTacToe = __webpack_require__(6);

var _ticTacToe2 = __webpack_require__(5);

var _ticTacToe3 = __webpack_require__(7);

var _ticTacToe4 = __webpack_require__(1);

_ticTacToe.state.init(_ticTacToe3.view);
_ticTacToe2.model.init(_ticTacToe.state);
_ticTacToe4.actions.init(_ticTacToe2.model.present);

_ticTacToe3.view.display(_ticTacToe3.view.init(_ticTacToe2.model));

window.actions = _ticTacToe4.actions;

/***/ },
/* 3 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNextComputerMove = getNextComputerMove;

var _board = __webpack_require__(0);

function getNextComputerMove(board) {
    var emptyPositions = board.map(function (cell, position) {
        if (cell === _board.EMPTY) {
            return position;
        }
        return null;
    }).filter(function (position) {
        return position !== null;
    });

    var data = {};
    if (emptyPositions.length > 0) {
        data.position = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
    }

    return data;
}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.model = undefined;

var _board = __webpack_require__(0);

var model = exports.model = {
    board: (0, _board.createEmptyBoard)(),
    userChecker: null
};

model.init = function (state) {
    return model.state = state;
};

model.present = function (data) {
    data = data || {};
    if (model.state.ready(model)) {
        if (data.userChecker === _board.CROSS || data.userChecker === _board.NOUGHT) {
            model.userChecker = data.userChecker;
        }
    } else if (model.state.userPlaying(model)) {
        if ((0, _board.isEmptyCell)(model.board, data.position)) {
            model.board[data.position] = model.userChecker;
        }
    } else if (model.state.computerPlaying(model)) {
        if ((0, _board.isEmptyCell)(model.board, data.position)) {
            model.board[data.position] = (0, _board.getComputerChecker)(model.board);
        }
    } else if (model.state.winner(model) || model.state.loser(model) || model.state.draw(model)) {
        if (data.reseting) {
            model.board = (0, _board.createEmptyBoard)();
            model.userChecker = null;
        }
    }
    model.state.render(model);
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.state = undefined;

var _board = __webpack_require__(0);

var _randomPositionComputer = __webpack_require__(4);

var _ticTacToe = __webpack_require__(1);

var state = exports.state = {};

state.init = function (view) {
    return state.view = view;
};

state.ready = function (model) {
    return model.userChecker !== _board.CROSS && model.userChecker !== _board.NOUGHT;
};

state.userPlaying = function (model) {
    return (0, _board.getCurrentPlayer)(model.board) === _board.USER && (model.userChecker === _board.CROSS || model.userChecker === _board.NOUGHT) && (0, _board.isWinner)(model.board, model.userChecker) === false && (0, _board.isLoser)(model.board, model.userChecker) === false && (0, _board.isFullBoard)(model.board) === false;
};

state.computerPlaying = function (model) {
    return (0, _board.getCurrentPlayer)(model.board) === _board.COMPUTER && (model.userChecker === _board.CROSS || model.userChecker === _board.NOUGHT) && (0, _board.getComputerChecker)(model.board) !== model.userChecker && ((0, _board.getComputerChecker)(model.board) === _board.CROSS || (0, _board.getComputerChecker)(model.board) === _board.NOUGHT) && (0, _board.isWinner)(model.board, model.userChecker) === false && (0, _board.isLoser)(model.board, model.userChecker) === false && (0, _board.isFullBoard)(model.board) === false;
};

state.winner = function (model) {
    return (0, _board.isWinner)(model.board, model.userChecker) === true && (0, _board.isLoser)(model.board, model.userChecker) === false;
};

state.loser = function (model) {
    return (0, _board.isWinner)(model.board, model.userChecker) === false && (0, _board.isLoser)(model.board, model.userChecker) === true;
};

state.draw = function (model) {
    return (0, _board.isWinner)(model.board, model.userChecker) === false && (0, _board.isLoser)(model.board, model.userChecker) === false && (0, _board.isFullBoard)(model.board) === true;
};

state.representation = function (model) {
    var representation = 'oops... something went wrong, the system is in a invalid state.';

    if (state.ready(model)) {
        console.log('state: ready');
        representation = state.view.ready(model);
    }

    if (state.userPlaying(model)) {
        console.log('state: userPlaying');
        representation = state.view.userPlaying(model);
    }

    if (state.computerPlaying(model)) {
        console.log('state: computerPlaying');
        representation = state.view.computerPlaying(model);
    }

    if (state.winner(model)) {
        console.log('state: winner');
        representation = state.view.winner(model);
    }

    if (state.loser(model)) {
        console.log('state: loser');
        representation = state.view.loser(model);
    }

    if (state.draw(model)) {
        console.log('state: draw');
        representation = state.view.draw(model);
    }

    state.view.display(representation);
};

state.nextAction = function (model) {
    if (state.computerPlaying(model)) {
        _ticTacToe.actions.computerMove((0, _randomPositionComputer.getNextComputerMove)(model.board), model.present);
    }

    if (state.winner(model) || state.loser(model) || state.draw(model)) {
        _ticTacToe.actions.reset({}, model.present);
    }
};

state.render = function (model) {
    state.representation(model);
    state.nextAction(model);
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.view = undefined;

var _board = __webpack_require__(0);

var view = exports.view = {};

view.init = function (model) {
    return view.ready(model);
};

view.display = function (representation) {
    var app = document.getElementById('tic-tac-toe');
    app.innerHTML = representation;
};

view.ready = function (model) {
    var representation = '\n        <button type="button" class="btn" onclick="actions.setUserChecker({ userChecker: \'' + _board.CROSS + '\' })">' + _board.CROSS + '</button>\n        <span>or</span>\n        <button type="button" class="btn" onclick="actions.setUserChecker({ userChecker: \'' + _board.NOUGHT + '\' })">' + _board.NOUGHT + '</button>\n    ';

    return representation;
};

view.userPlaying = function (model) {
    var representation = '<div class="player">Your turn!</div>';
    for (var i = 0; i < model.board.length; i++) {
        if (i % _board.BOARD_SIZE === 0) {
            representation += '<div class="row">';
        }

        representation += '<div class="cell" onclick="actions.userMove({ position: ' + i + ' })">' + model.board[i] + '</div>';

        if (i % _board.BOARD_SIZE === _board.BOARD_SIZE - 1) {
            representation += '</div>';
        }
    }
    return representation;
};

view.computerPlaying = function (model) {
    var representation = '<div class="player">Computers turn!</div>';
    for (var i = 0; i < model.board.length; i++) {
        if (i % _board.BOARD_SIZE === 0) {
            representation += '<div class="row">';
        }

        representation += '<div class="cell">' + model.board[i] + '</div>';

        if (i % _board.BOARD_SIZE === _board.BOARD_SIZE - 1) {
            representation += '</div>';
        }
    }
    return representation;
};

view.winner = function (model) {
    var representation = '<div class="player">You won!!</div>';
    return representation;
};

view.loser = function (model) {
    var representation = '<div class="player">Loser!!!</div>';
    return representation;
};

view.draw = function (model) {
    var representation = '<div class="player">It was a draw</div>';
    return representation;
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);
__webpack_require__(2);

/***/ }
/******/ ]);
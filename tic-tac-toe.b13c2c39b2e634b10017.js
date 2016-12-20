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
/******/ 	__webpack_require__.p = "tic-tact-toe/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _ticTacToe = __webpack_require__(4);

var _ticTacToe2 = __webpack_require__(5);

var _ticTacToe3 = __webpack_require__(3);

var _ticTacToe4 = __webpack_require__(2);

_ticTacToe.state.init(_ticTacToe2.view);
_ticTacToe3.model.init(_ticTacToe.state);
_ticTacToe4.actions.init(_ticTacToe3.model.present);

_ticTacToe2.view.display(_ticTacToe2.view.init(_ticTacToe3.model));

window.actions = _ticTacToe4.actions;

/***/ },
/* 1 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var actions = exports.actions = {};

actions.init = function (present) {
    return actions.present = present;
};

actions.setPlayers = function (data, present) {
    present = present || actions.present;
    data = data || {};
    data.players = data.players || 0;
    present(data);
    return false;
};

actions.setChecker = function (data, present) {
    present = present || actions.present;
    data = data || {};
    data.checkers = data.checkers || [];
    present(data);
    return false;
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var model = exports.model = {
    players: 0,
    checkers: []
};

model.init = function (state) {
    return model.state = state;
};

model.present = function (data) {
    if (model.state.ready(model)) {
        model.players = data.players || 0;
    } else if (model.state.checkers(model)) {
        model.checkers = data.checkers || [];
    } else if (model.state.game(model)) {}

    model.state.render(model);
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var state = exports.state = {};

state.init = function (view) {
    return state.view = view;
};

state.ready = function (model) {
    return model.players === 0;
};

state.checkers = function (model) {
    return model.players === 1 || model.players === 2;
};

state.game = function (model) {
    return model.checkers[0] === 'X' && model.checkers[1] === 'O' || model.checkers[0] === 'O' && model.checkers[1] === 'X';
};

state.representation = function (model) {
    var representation = 'oops... something went wrong, the system is in a invalid state.';

    if (state.ready(model)) {
        representation = state.view.ready(model);
    }

    if (state.checkers(model)) {
        representation = state.view.checkers(model);
    }

    if (state.game(model)) {
        representation = state.view.game(model);
    }

    return state.view.display(representation);
};

state.render = function (model) {
    state.representation(model);
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var view = exports.view = {};

view.init = function (model) {
    return view.ready(model);
};

view.display = function (representation) {
    var screen = document.getElementById('screen');
    screen.innerHTML = representation;
};

view.ready = function (model) {
    return '\n        <button type="button" class="btn" onclick="actions.setPlayers({ players: 1 })">one player</button>\n        <br/>or<br/>\n        <button type="button" class="btn" onclick="actions.setPlayers({ players: 2 })">two players</button>\n    ';
};

view.checkers = function (model) {
    return '\n        <button type="button" class="btn" onclick="actions.setChecker({ checkers: [\'X\', \'O\'] })">X</button>\n        <span>or</span>\n        <button type="button" class="btn" onclick="actions.setChecker({ checkers: [\'O\', \'X\'] })">O</button>  \n    ';
};

view.game = function (model) {
    return '\n        <div class="row">\n            <div class="cell"></div>\n            <div class="cell"></div>\n            <div class="cell"></div>\n        </div>    \n        <div class="row">\n            <div class="cell"></div>\n            <div class="cell">X</div>\n            <div class="cell"></div>\n        </div>    \n        <div class="row">\n            <div class="cell">O</div>\n            <div class="cell"></div>\n            <div class="cell"></div>\n        </div>\n    ';
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
__webpack_require__(0);

/***/ }
/******/ ]);
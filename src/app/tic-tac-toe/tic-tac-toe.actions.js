'use strict';

export let actions = {};

actions.init = (present) => actions.present = present;

actions.setPlayers = (data, present) => {
    present = present || actions.present;
    data = data || {};
    data.players = data.players || 0;
    present(data);
    return false;
};

actions.setChecker = (data, present) => {
    present = present || actions.present;
    data = data || {};
    data.checkers = data.checkers || [];
    present(data);
    return false;
};
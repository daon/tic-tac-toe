'use strict';

export let actions = {};

actions.init = (present) => actions.present = present;

actions.placeChecker = (data, present) => {
    present = present || actions.present;
    data = data || {};
    present(data);
    return false;
};

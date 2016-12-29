'use strict';

export let actions = {};

actions.init = (present) => actions.present = present;

actions.placeChecker = (data, present) => {
    present = present || actions.present;
    data = data || {};
    present(data);
    return false;
};

actions.reset = (data, present) => {
    present = present || actions.present;
    data = data || {};
    data.reseting = true;
    present(data);
    return false;
}
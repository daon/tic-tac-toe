'use strict';

export let actions = {};

actions.init = (present) => actions.present = present;

actions.setUserChecker = (data, present) => {
    console.log('action: setUserChecker');
    present = present || actions.present;
    data = data || {};
    present(data);
    return false;
};

actions.userMove = (data, present) => {
    console.log('action: userMove');
    present = present || actions.present;
    data = data || {};
    present(data);
    return false;
};

actions.computerMove = (data, present) => {
    console.log('action: computerMove');
    present = present || actions.present;
    data = data || {};
    let d = data;
    let p = present;
    setTimeout(() => {
        p(d);
    }, 1000);
}

actions.reset = (data, present) => {
    console.log('action: reset');
    present = present || actions.present;
    data = data || {};
    data.reseting = true;
    let d = data;
    let p = present;
    setTimeout(() => {
        p(d);
    }, 1000);
}
'use strict';

export let actions = {};

actions.init = (present) => actions.present = present;

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
    present = present || actions.present;
    data = data || {};
    data.reseting = true;
    present(data);
    return false;
}
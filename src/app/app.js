'use strict';
import { state } from './tic-tac-toe/tic-tac-toe.state';
import { model } from './tic-tac-toe/tic-tac-toe.model';
import { view } from './tic-tac-toe/tic-tac-toe.view';
import { actions } from './tic-tac-toe/tic-tac-toe.actions';

state.init(view);
model.init(state);
actions.init(model.present);

view.display(view.init(model));

window.actions = actions;
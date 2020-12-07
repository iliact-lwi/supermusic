import { combineReducers } from 'redux';

import tracksReducers from './tracksReducer';
import actionsReducer from './actionsReducer';
import artistReducer from './artistReducer';

export default combineReducers({
    tracks: tracksReducers,
    actions: actionsReducer,
    artist: artistReducer,
});

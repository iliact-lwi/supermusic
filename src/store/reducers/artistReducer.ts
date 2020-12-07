import { GET_ARTIST_INFO } from '../types';

import { ActionTypes } from '../actions';
import { artistStateType } from '../../interfaces/interfaces';

const initialState: artistStateType = {
    artistInfo: undefined,
};

const artistReducer = (
    state: artistStateType = initialState,
    action: ActionTypes
) => {
    switch (action.type) {
        case GET_ARTIST_INFO: {
            return {
                ...state,
                artistInfo: action.artist,
            };
        }

        default:
            return state;
    }
};

export default artistReducer;

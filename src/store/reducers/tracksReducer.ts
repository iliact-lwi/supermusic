import {
    GET_TOP_TRACKS,
    GET_SEARCH_TRACKS,
    SEARCH_TRACKS_STATUS,
} from '../types';

import { ActionTypes } from '../actions';
import { tracksStateType } from '../../interfaces/interfaces';

const initialState: tracksStateType = {
    topTracks: [],
    search: [],
    searchStatus: 'Enter track title',
};

const tracksReducer = (
    state: tracksStateType = initialState,
    action: ActionTypes
) => {
    switch (action.type) {
        case GET_TOP_TRACKS: {
            return {
                ...state,
                topTracks: state.topTracks.concat(action.tracks),
            };
        }

        case GET_SEARCH_TRACKS: {
            return {
                ...state,
                search: action.tracks,
            };
        }

        case SEARCH_TRACKS_STATUS: {
            return {
                ...state,
                searchStatus: action.status,
            };
        }

        default:
            return state;
    }
};

export default tracksReducer;

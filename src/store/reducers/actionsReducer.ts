import {
    GET_TOP_TRACKS_FAILED,
    GET_ARTIST_INFO_FAILED,
    GET_SEARCH_TRACKS_FAILED,
} from '../types';

import { ActionTypes } from '../actions';
import { actionsStateType } from '../../interfaces/interfaces';

const initialState: actionsStateType = {
    topTracksFailed: '',
    artistInfoFailed: '',
    searchTracksFailed: '',
};

const actionsReducer = (
    state: actionsStateType = initialState,
    action: ActionTypes
) => {
    switch (action.type) {
        case GET_TOP_TRACKS_FAILED: {
            return {
                ...state,
                topTracksFailed: action.message,
            };
        }

        case GET_ARTIST_INFO_FAILED: {
            return {
                ...state,
                artistInfoFailed: action.message,
            };
        }

        case GET_SEARCH_TRACKS_FAILED: {
            return {
                ...state,
                searchTracksFailed: action.message,
            };
        }

        default:
            return state;
    }
};

export default actionsReducer;

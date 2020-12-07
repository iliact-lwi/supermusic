import {
    getTopTracksType,
    topTracksType,
    getArtistInfoType,
    getSearchTracksType,
    searchTracksType,
} from '../../interfaces/interfaces';
import {
    GET_TOP_TRACKS,
    GET_TOP_TRACKS_FAILED,
    GET_ARTIST_INFO,
    GET_ARTIST_INFO_FAILED,
    GET_SEARCH_TRACKS,
    SEARCH_TRACKS_STATUS,
    GET_SEARCH_TRACKS_FAILED,
} from '../types';

import { ThunkAction } from 'redux-thunk';

const API_KEY = 'deb9c3028b400bea811320f3d9e46149';
let page = 1;

type getArtistInfoFailedActionType = {
    type: typeof GET_ARTIST_INFO_FAILED;
    message: string;
};

type getTopTracksFailedActionType = {
    type: typeof GET_TOP_TRACKS_FAILED;
    message: string;
};

type getSearchTracksFailedActionType = {
    type: typeof GET_SEARCH_TRACKS_FAILED;
    message: string;
};

type searchTracksStatusActionType = {
    type: typeof SEARCH_TRACKS_STATUS;
    status: string;
};

type getTopTracksCurrentActionType = {
    type: typeof GET_TOP_TRACKS;
    tracks: topTracksType[];
};

type getArtistInfoCurrentActionType = {
    type: typeof GET_ARTIST_INFO;
    artist: getArtistInfoType;
};

type getSearchTracksCurrentActionType = {
    type: typeof GET_SEARCH_TRACKS;
    tracks: searchTracksType[];
};

const getArtistInfoFailed = (
    message: string
): getArtistInfoFailedActionType => {
    return {
        type: GET_ARTIST_INFO_FAILED,
        message,
    };
};

const getTopTracksFailed = (message: string): getTopTracksFailedActionType => {
    return {
        type: GET_TOP_TRACKS_FAILED,
        message,
    };
};

const getSearchTracksFailed = (
    message: string
): getSearchTracksFailedActionType => {
    return {
        type: GET_SEARCH_TRACKS_FAILED,
        message,
    };
};

export const searchTracksStatus = (
    status: string
): searchTracksStatusActionType => {
    return {
        type: SEARCH_TRACKS_STATUS,
        status,
    };
};

const getTopTracksCurrent = (
    tracks: topTracksType[]
): getTopTracksCurrentActionType => {
    return {
        type: GET_TOP_TRACKS,
        tracks,
    };
};

export const getArtistInfoCurrent = (
    artist: getArtistInfoType
): getArtistInfoCurrentActionType => {
    return {
        type: GET_ARTIST_INFO,
        artist,
    };
};

export const getSearchTracksCurrent = (
    tracks: searchTracksType[]
): getSearchTracksCurrentActionType => {
    return {
        type: GET_SEARCH_TRACKS,
        tracks,
    };
};

export const getTopTracks = (): ThunkAction<
    void,
    unknown,
    unknown,
    ActionTypes
> => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&page=${page}&format=json`
            );

            if (response.ok) {
                try {
                    const json: getTopTracksType = await response.json();

                    dispatch(getTopTracksCurrent(json.tracks.track));
                    dispatch(getTopTracksFailed(''));
                    page++;
                } catch (err) {
                    throw new Error(
                        `Incorrect data or server not responding, details: ${err.message}`
                    );
                }
            } else {
                throw new Error(
                    `Error ${response.status}: ${response.statusText}`
                );
            }
        } catch (err) {
            dispatch(
                getTopTracksFailed(`Failed to load tracks - "${err.message}"`)
            );

            setTimeout(() => {
                dispatch(getTopTracksFailed(''));
            }, 5500);
        }
    };
};

export const getArtistInfo = (
    mbid: string,
    name: string
): ThunkAction<void, unknown, unknown, ActionTypes> => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${mbid}&artist=${name}&api_key=${API_KEY}&format=json`
            );

            if (response.ok) {
                try {
                    const json: getArtistInfoType = await response.json();

                    if (json!.artist.name) {
                        dispatch(getArtistInfoCurrent(json));
                        dispatch(getArtistInfoFailed(''));
                    } else {
                        throw new Error('value not found');
                    }
                } catch (err) {
                    throw new Error(
                        `Incorrect data or server not responding, details: ${err.message}`
                    );
                }
            } else {
                throw new Error(
                    `Error ${response.status}: ${response.statusText}`
                );
            }
        } catch (err) {
            dispatch(
                getArtistInfoFailed(`Failed to load info - "${err.message}"`)
            );

            setTimeout(() => {
                dispatch(getArtistInfoFailed(''));
            }, 5500);
        }
    };
};

export const getSearchTracks = (
    track: string
): ThunkAction<void, unknown, unknown, ActionTypes> => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&limit=10&api_key=${API_KEY}&format=json`
            );

            if (response.ok) {
                try {
                    const json: getSearchTracksType = await response.json();

                    if (Number(json.results['opensearch:totalResults']) === 0) {
                        dispatch(getSearchTracksCurrent([]));
                        dispatch(searchTracksStatus('Tracks not found'));
                        return;
                    }

                    const tracks = json.results.trackmatches.track;

                    if (tracks[0].name) {
                        dispatch(getSearchTracksCurrent(tracks));
                        dispatch(searchTracksStatus('Enter track title'));
                    } else {
                        throw new Error('value not found');
                    }
                } catch (err) {
                    throw new Error(
                        `Incorrect data or server not responding, details: ${err.message}`
                    );
                }
            } else {
                throw new Error(
                    `Error ${response.status}: ${response.statusText}`
                );
            }
        } catch (err) {
            dispatch(getSearchTracksFailed(`Search error - "${err.message}"`));
            dispatch(searchTracksStatus('Error'));

            setTimeout(() => {
                dispatch(getSearchTracksFailed(''));
            }, 5500);
        }
    };
};

export type ActionTypes =
    | getTopTracksCurrentActionType
    | getTopTracksFailedActionType
    | getArtistInfoCurrentActionType
    | getArtistInfoFailedActionType
    | getSearchTracksCurrentActionType
    | searchTracksStatusActionType
    | getSearchTracksFailedActionType;

import React from 'react';
import { useDispatch } from 'react-redux';

import { getTopTracks } from '../../../store/actions';

import './moretracks.scss';

const MoreTracksComponent: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const moreTracksHandler = () => {
        dispatch(getTopTracks());
    };

    return (
        <div className="more-tracks">
            <div className="more-tracks__button" onClick={moreTracksHandler}>
                More tracks
            </div>
        </div>
    );
};

export default MoreTracksComponent;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { getArtistInfo } from '../../store/actions';

import './tracks.scss';

import { rootStateType } from '../../interfaces/interfaces';

import TrackComponent from './track';
import MoreTracksComponent from './more';
import LoadingComponent from '../loading';

type propsType = {
    className?: string;
};

const TracksComponent: React.FunctionComponent<propsType> = ({ className }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const topTracks = useSelector(
        (state: rootStateType) => state.tracks.topTracks
    );

    const artistInfoHandler = (event: any) => {
        const target = event.target;
        const mbid: string | undefined = target.dataset.mbid;
        const artist: string | undefined = target.dataset.artist;

        if ((mbid === '' || mbid) && artist) {
            dispatch(getArtistInfo(mbid, artist));
            history.push(`/artist/${artist.split(' ').join('+')}`);
        }
    };

    let trackKey = 0;

    return (
        <>
            <div
                className={className ? `tracks ${className}` : `tracks`}
                onClick={artistInfoHandler}
            >
                {!!topTracks.length ? (
                    topTracks.map((track) => {
                        return (
                            <div className="tracks__body" key={trackKey++}>
                                <TrackComponent
                                    name={track.name}
                                    artist={track.artist.name}
                                    mbid={track.artist.mbid}
                                    image={track.image[2]['#text']}
                                    authorUrl={track.artist.url}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div className="tracks__loading">
                        <LoadingComponent />
                    </div>
                )}
            </div>
            <div className="tracks-more">
                <MoreTracksComponent />
            </div>
        </>
    );
};

export default TracksComponent;

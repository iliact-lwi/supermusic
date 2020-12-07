import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './artist.scss';

import { getArtistInfoCurrent } from '../store/actions';

import { rootStateType } from '../interfaces/interfaces';

import MessageComponent from '../components/message';
import ArtistInfoComponent from '../components/artistinfo';

const ArtistPage: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const artistInfoFailed = useSelector(
        (state: rootStateType) => state.actions.artistInfoFailed
    );

    useEffect(() => {
        return () => {
            dispatch(getArtistInfoCurrent(undefined));
        };
    }, [dispatch]);

    return (
        <main className="artist">
            {artistInfoFailed && (
                <MessageComponent variant="warning" text={artistInfoFailed} />
            )}
            <ArtistInfoComponent className="artist-info_padding-top-50" />
        </main>
    );
};

export default ArtistPage;

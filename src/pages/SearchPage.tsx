import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './search.scss';

import { rootStateType } from '../interfaces/interfaces';

import { getSearchTracksCurrent, searchTracksStatus } from '../store/actions';

import SearchTracksComponent from '../components/searchtracks';
import MessageComponent from '../components/message';

const SearchPage: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const searchTracksFailed = useSelector(
        (state: rootStateType) => state.actions.searchTracksFailed
    );

    useEffect(() => {
        return () => {
            dispatch(getSearchTracksCurrent([]));
            dispatch(searchTracksStatus('Enter track title'));
        };
    }, [dispatch]);

    return (
        <main className="search">
            {searchTracksFailed && (
                <MessageComponent variant="danger" text={searchTracksFailed} />
            )}
            <SearchTracksComponent className="search-tracks_padding-top-50" />
        </main>
    );
};

export default SearchPage;

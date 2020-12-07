import React from 'react';
import { useSelector } from 'react-redux';

import './index.scss';

import { rootStateType } from '../interfaces/interfaces';

import TracksComponent from '../components/tracks';
import MessageComponent from '../components/message';

const IndexPage: React.FunctionComponent = () => {
    const topTracksFailed = useSelector(
        (state: rootStateType) => state.actions.topTracksFailed
    );

    return (
        <main className="index">
            {topTracksFailed && (
                <MessageComponent variant="danger" text={topTracksFailed} />
            )}
            <TracksComponent className="tracks_padding-top-50" />
        </main>
    );
};

export default IndexPage;

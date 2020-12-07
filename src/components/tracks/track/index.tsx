import React from 'react';

import './track.scss';

type propsType = {
    image: string;
    name: string;
    artist: string;
    authorUrl: string;
    mbid: string;
};

const TrackComponent: React.FunctionComponent<propsType> = ({
    image,
    name,
    artist,
    mbid,
    authorUrl,
}) => {
    return (
        <div className="track">
            <div className="track__image">
                <img src={image} alt="img" />
            </div>
            <div className="track__body">
                <div className="track__header">
                    <div className="track__name">{name}</div>
                    <div
                        className="track__artist"
                        data-artist={artist}
                        data-mbid={mbid}
                    >
                        {artist}
                    </div>
                </div>
                <a
                    className="track__author-url"
                    href={authorUrl}
                    rel="noreferrer"
                    target="_blank"
                    title={artist}
                >
                    Profile on Last.fm
                </a>
            </div>
        </div>
    );
};

export default TrackComponent;

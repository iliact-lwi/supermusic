import React from 'react';
import { useSelector } from 'react-redux';

import './artistinfo.scss';

import { rootStateType } from '../../interfaces/interfaces';

import LoadingComponent from '../loading';

type propsType = {
    className?: string;
};

const ArtistInfoComponent: React.FunctionComponent<propsType> = ({
    className,
}) => {
    const artist = useSelector(
        (state: rootStateType) => state.artist.artistInfo
    );

    let tagKey = 0;

    return (
        <div className={className ? `artist-info ${className}` : 'artist-info'}>
            {artist ? (
                <div className="artist-info__body">
                    <div className="artist-info__preview">
                        <div className="artist-info__img">
                            <img
                                src={artist.artist.image[2]['#text']}
                                alt="img"
                            />
                        </div>
                        <div className="artist-info__header">
                            <div className="artist-info__name">
                                {artist.artist.name}
                            </div>
                            <div className="artist-info__tags">
                                {artist.artist.tags.tag.map((name) => {
                                    return (
                                        <div
                                            key={tagKey++}
                                            className="artist-info__tag"
                                        >
                                            {name.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div
                        className="artist-info__description"
                        dangerouslySetInnerHTML={{
                            __html: artist.artist.bio.content,
                        }}
                    ></div>
                </div>
            ) : (
                <div className="artist-info__loading">
                    <LoadingComponent />
                </div>
            )}
        </div>
    );
};

export default ArtistInfoComponent;

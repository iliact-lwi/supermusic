import React from 'react';

import './searchtracksitem.scss';

type propsType = {
    name: string;
    artist: string;
};

const SearchTracksItemComponent: React.FunctionComponent<propsType> = ({
    name,
    artist,
}) => {
    return (
        <div className="search-tracks-item">
            <div className="search-tracks-item__body">
                <div className="search-tracks-item__name">{name}</div>
                <div className="search-tracks-item__artist">{artist}</div>
            </div>
        </div>
    );
};

export default SearchTracksItemComponent;

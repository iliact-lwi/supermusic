import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import './searchtracks.scss';

import { rootStateType } from '../../interfaces/interfaces';

import { getSearchTracks, searchTracksStatus } from '../../store/actions';

import SearchTracksItemComponent from './searchtracksitem';

type propsType = {
    className?: string;
};

const SearchTracksComponent: React.FunctionComponent<propsType> = ({
    className,
}) => {
    const [searchInput, setSearchInput] = useState('');
    const search = useSelector((state: rootStateType) => state.tracks.search);
    const searchStatus = useSelector(
        (state: rootStateType) => state.tracks.searchStatus
    );

    const dispatch = useDispatch();

    let searchKey = 1;

    const inputHandler = (event: any) => {
        setSearchInput(event.target.value);
    };

    const searchHandler = () => {
        if (searchInput.trim().length < 3 || searchInput.trim() === '') {
            dispatch(searchTracksStatus('Validation error'));
            setSearchInput('');
            return;
        }

        dispatch(getSearchTracks(searchInput));
    };

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
    };

    return (
        <div
            className={
                className ? `search-tracks ${className}` : 'search-tracks'
            }
        >
            <div className="search-tracks__header">
                <div className="search-tracks__field">
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group controlId="formSearch">
                            <Form.Label>Search tracks</Form.Label>
                            <Form.Control
                                onChange={inputHandler}
                                value={searchInput}
                                type="text"
                                placeholder="Name of the track"
                            />
                            <Form.Text className="search-tracks__status">
                                {searchStatus}
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </div>
                <div className="search-tracks__button-box">
                    <Button
                        onClick={searchHandler}
                        variant="light"
                        className="search-tracks__button"
                    >
                        Search
                    </Button>
                </div>
            </div>
            <div className="search-tracks__body">
                {!!search.length &&
                    search.map((track) => {
                        return (
                            <SearchTracksItemComponent
                                key={searchKey++}
                                name={track.name}
                                artist={track.artist}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default SearchTracksComponent;

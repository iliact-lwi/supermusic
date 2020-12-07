import React from 'react';
import { useHistory } from 'react-router';

import { Container } from 'react-bootstrap';

import SearchIcon from '@material-ui/icons/Search';

import './navigation.scss';

const NavigationComponent: React.FunctionComponent = () => {
    const history = useHistory();

    const searchHandler = () => {
        history.push('/search');
    };

    const homeHandler = () => {
        history.push('/');
    };

    return (
        <Container fluid className="navigation p-0">
            <nav className="navigation__body">
                <div className="navigation__logo" onClick={homeHandler}>
                    SUPER MUSIC
                </div>
                <div className="navigation__search" onClick={searchHandler}>
                    <SearchIcon fontSize="large" />
                </div>
            </nav>
        </Container>
    );
};

export default NavigationComponent;

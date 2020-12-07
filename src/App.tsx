import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { getTopTracks } from './store/actions';

import './App.scss';

import NavigationComponent from './components/navigation';
import IndexPage from './pages/IndexPage';
import SearchPage from './pages/SearchPage';
import ArtistPage from './pages/ArtistPage';

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopTracks());
    }, [dispatch]);

    return (
        <Router>
            <NavigationComponent />
            <Container className="main">
                <Switch>
                    <Route component={IndexPage} path="/" exact />
                    <Route component={SearchPage} path="/search" />
                    <Route component={ArtistPage} path="/artist/:artist" />
                </Switch>
            </Container>
        </Router>
    );
};

export default App;

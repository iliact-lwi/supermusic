import React from 'react';
import { Spinner } from 'react-bootstrap';

import './loading.scss';

const LoadingComponent: React.FunctionComponent = () => {
    return (
        <div className="loading">
            <div className="loading__title">
                Please wait while the content is loaded
                <div className="loading__subtitle">Loading...</div>
            </div>
            <div className="loading__img">
                <Spinner animation="border" role="status" variant="light">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        </div>
    );
};

export default LoadingComponent;

import React from 'react';
import { Alert } from 'react-bootstrap';

import './message.scss';

type propsType = {
    variant: string;
    text: string;
};

const MessageComponent: React.FunctionComponent<propsType> = ({
    variant,
    text,
}) => {
    return (
        <div className="message">
            <Alert variant={variant}>{text}</Alert>
        </div>
    );
};

export default MessageComponent;

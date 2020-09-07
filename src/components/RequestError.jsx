import React from 'react';
import PropTypes from 'prop-types';
import GetMoreButton from './GetMoreButton';
import './_components.request-error.scss';

const RequestError = ({ onClick }) => {
    return (
        <div className="request-error">
            <p className="request-error__text">
                There was a problem trying to retrieve movies. Please try again.
            </p>
            <GetMoreButton onClick={onClick} />
        </div>
    );
};

RequestError.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default RequestError;

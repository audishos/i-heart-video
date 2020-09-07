import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import './_components.get-more-button.scss';

const GetMoreButton = ({ onClick }) => {
    return (
        <div className="get-more-button">
            <Button
                className="get-more-button__button"
                onClick={onClick}
                variant="contained"
                color="primary"
                size="large"
            >
                Get More!
            </Button>
        </div>
    );
};

GetMoreButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default GetMoreButton;

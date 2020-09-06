import React from 'react';
import PropTypes from 'prop-types';
import './_components.movie-banner.scss';

const MovieBanner = ({ title }) => {
    return (
        <div className="movie-banner">
            <h2 className="movie-banner__title">{title}</h2>
        </div>
    );
};

MovieBanner.propTypes = {
    title: PropTypes.string,
};

export default MovieBanner;

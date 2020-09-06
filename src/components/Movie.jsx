import React from 'react';
import PropTypes from 'prop-types';
import './_components.movie.scss';

const Movie = ({ title, imgSrc }) => {
    return (
        <div className="movie">
            <img className="movie__poster" src={imgSrc} alt={title} />
        </div>
    );
};

Movie.propTypes = {
    title: PropTypes.string,
    imgSrc: PropTypes.string,
};

export default Movie;

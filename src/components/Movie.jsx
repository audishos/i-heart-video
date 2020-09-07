import React from 'react';
import PropTypes from 'prop-types';
import MovieBanner from './MovieBanner';
import './_components.movie.scss';

const Movie = ({ title, imgSrc, ...restProps }) => (
    <div className="movie">
        <img className="movie__poster" src={imgSrc} alt={title} />
        <MovieBanner title={title} {...restProps} />
    </div>
);

Movie.propTypes = {
    title: PropTypes.string,
    imgSrc: PropTypes.string,
};

export default Movie;

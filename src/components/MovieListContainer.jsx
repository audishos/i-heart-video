import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import Movie from './Movie';

const MovieListContainer = ({ movieList = [], onToggleFavorite }) => {
    return (
        <MovieList>
            {movieList.map(movie => (
                <Movie
                    key={movie.id}
                    onToggleFavorite={onToggleFavorite}
                    {...movie}
                />
            ))}
        </MovieList>
    );
};

MovieListContainer.propTypes = {
    movieList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            imgSrc: PropTypes.string.isRequired,
            isFavorite: PropTypes.bool.isRequired,
        }),
    ),
    onToggleFavorite: PropTypes.func.isRequired,
};

export default MovieListContainer;

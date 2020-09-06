import React from 'react';
import PropTypes from 'prop-types';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import './_components.movie-banner.scss';

const MovieBanner = ({ id, title, isFavorite, onToggleFavorite }) => {
    return (
        <div className="movie-banner">
            <h2 className="movie-banner__title">{title}</h2>
            <button
                className="movie-banner__favorite-button"
                onClick={() => onToggleFavorite(id, isFavorite)}
            >
                {isFavorite ? (
                    <Favorite color="action" fontSize="large" />
                ) : (
                    <FavoriteBorder color="action" fontSize="large" />
                )}
            </button>
        </div>
    );
};

MovieBanner.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    onToggleFavorite: PropTypes.func.isRequired,
};

export default MovieBanner;

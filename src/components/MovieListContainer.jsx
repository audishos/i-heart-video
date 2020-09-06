import React, { useState, useEffect } from 'react';
import usePopularMovies from '../hooks/usePopularMovies';
import MovieList from './MovieList';
import Movie from './Movie';
import { SUCCESS } from '../hooks/useRequest/actionTypes';
import { IMAGES_URL } from '../constants/theMovieDb';

const MovieListContainer = () => {
    const [page, setPage] = useState(1);
    const [state, fetch] = usePopularMovies(page);
    const [favorites, handleToggleFavorite] = useFavorites();

    useEffect(() => {
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        state.status === SUCCESS && (
            <MovieList>
                {state.response.data.results.map(movie => (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        id={movie.id}
                        imgSrc={`${IMAGES_URL}${movie.poster_path}`}
                        isFavorite={favorites.includes(movie.id)}
                        onToggleFavorite={handleToggleFavorite}
                    />
                ))}
            </MovieList>
        )
    );
};

export default MovieListContainer;

function useFavorites() {
    const [favorites, setFavorites] = useState([]);

    const handleToggleFavorite = (id, isFavorite) =>
        isFavorite
            ? setFavorites(favorites.filter(x => x !== id))
            : setFavorites(favorites.concat(id));

    return [favorites, handleToggleFavorite];
}

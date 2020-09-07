import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MovieListContainer from './components/MovieListContainer';
import usePopularMovies from './hooks/usePopularMovies';
import useFavorites from './hooks/useFavorites';
import { IMAGES_URL } from './constants/theMovieDb';

function App() {
    const [popularMovies, GetMoreComponent] = usePopularMovies();
    const [favorites, handleToggleFavorite] = useFavorites();

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/favorites">
                        <MovieListContainer
                            movieList={popularMovies
                                .filter(x => favorites.includes(x.id))
                                .map(x => ({
                                    id: x.id,
                                    title: x.title,
                                    imgSrc: `${IMAGES_URL}${x.poster_path}`,
                                    isFavorite: true,
                                }))}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    </Route>
                    <Route path="/">
                        <MovieListContainer
                            movieList={popularMovies.map(x => ({
                                id: x.id,
                                title: x.title,
                                imgSrc: `${IMAGES_URL}${x.poster_path}`,
                                isFavorite: favorites.includes(x.id),
                            }))}
                            onToggleFavorite={handleToggleFavorite}
                        />
                        {GetMoreComponent}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

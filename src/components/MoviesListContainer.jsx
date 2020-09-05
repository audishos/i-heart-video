import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import usePopularMovies from '../hooks/usePopularMovies';

const MoviesListContainer = props => {
  const [page, setPage] = useState(1);
  const [state, fetch] = usePopularMovies(page);

  useEffect(() => {
    fetch();
  }, []);

  return <div>{state && JSON.stringify(state, null, 2)}</div>;
};

MoviesListContainer.propTypes = {};

export default MoviesListContainer;

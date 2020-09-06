/* eslint-disable react/prop-types */
import React from 'react';
import './_components.movie-list.scss';

const MovieList = ({ children }) => (
    <div className="movie-list">{children}</div>
);

export default MovieList;

import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import MovieListContainer from '../MovieListContainer';

const mockMovieList = [
    { id: 1, title: 'foo', imgSrc: '/foo.jpg', isFavorite: true },
    { id: 2, title: 'bar', imgSrc: '/bar.jpg', isFavorite: false },
    { id: 3, title: 'biz', imgSrc: '/biz.jpg', isFavorite: true },
    { id: 4, title: 'baz', imgSrc: '/baz.jpg', isFavorite: false },
    { id: 5, title: 'plumbis', imgSrc: '/plumbis.jpg', isFavorite: true },
];

const props = {
    movieList: mockMovieList,
    onToggleFavorite: jest.fn(),
};

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe('<MovieListContainer>', () => {
    it('should match the snapshot', () => {
        const { container } = render(<MovieListContainer {...props} />);

        expect(container).toMatchSnapshot();
    });

    it('should invoke onToggleFavorite when heart icon button clicked', () => {
        const { id, isFavorite } = mockMovieList[0];
        const { getAllByTestId } = render(<MovieListContainer {...props} />);

        fireEvent.click(getAllByTestId('movie-banner__favorite-button')[0]);

        expect(props.onToggleFavorite).toBeCalledWith(id, isFavorite);
    });
});

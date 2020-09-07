import React, { useRef, useState, useEffect } from 'react';
import GetMoreButton from '../../components/GetMoreButton';
import Spinner from '../../components/Spinner';
import request from '../../modules/request';
import useRequest from '../useRequest';
import { SUCCESS, FETCHING, ERROR } from '../useRequest/actionTypes';
import RequestError from '../../components/RequestError';

const usePopularMovies = () => {
    const params = useRef({ page: 1 });
    const [popularMovies, setPopularMovies] = useState([]);
    const [GetMoreComponent, setGetMoreComponent] = useState(null);
    const [state, fetch] = useRequest('/movie/popular', {
        params: params.current,
        requestInstance: request,
    });

    useEffect(() => {
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        switch (state.status) {
            case SUCCESS: {
                const { page, total_pages: totalPages } = state.response.data;
                if (params.current.page === page) {
                    params.current.page = page + 1;
                    setPopularMovies(
                        popularMovies.concat(
                            // For some reason the API will sometimes return duplcates on subsequent pages
                            // This removes them from the list
                            state.response.data.results.filter(
                                x =>
                                    popularMovies.findIndex(
                                        y => x.id === y.id,
                                    ) === -1,
                            ),
                        ),
                    );
                }

                if (page < totalPages) {
                    setGetMoreComponent(<GetMoreButton onClick={fetch} />);
                } else {
                    setGetMoreComponent(null);
                }
                break;
            }

            case FETCHING: {
                setGetMoreComponent(<Spinner />);
                break;
            }

            case ERROR: {
                setGetMoreComponent(<RequestError onClick={fetch} />);
                break;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.status, fetch]);

    return [popularMovies, GetMoreComponent];
};

export default usePopularMovies;

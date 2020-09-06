import { useEffect } from 'react';
import request from '../../modules/request';
import useRequest from '../useRequest';
import { SUCCESS } from '../useRequest/actionTypes';

const usePopularMovies = (page = 1) => {
    const [state, fetch] = useRequest('/movie/popular', {
        params: { page },
        requestInstance: request,
    });

    useEffect(() => {
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [state.status === SUCCESS && state.response.data.results, fetch];
};

export default usePopularMovies;

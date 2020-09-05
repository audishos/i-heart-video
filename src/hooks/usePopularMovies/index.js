import request from '../../modules/request';
import useRequest from '../useRequest';

const usePopularMovies = (page = 1) => {
  const [state, fetch] = useRequest('/movie/popular', {
    params: { page },
    requestInstance: request,
  });

  return [state, fetch];
};

export default usePopularMovies;

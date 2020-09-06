import { useReducer, useCallback } from 'react';
import request from 'axios';
import reducer, { initialState } from './reducer';
import { fetching, success, error } from './actionCreators';

const useRequest = (
    path,
    { verb = 'get', params = {}, requestInstance = request } = {},
) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetch = useCallback(async () => {
        dispatch(fetching());

        try {
            const response = await requestInstance[verb](path, { params });
            dispatch(success(response));
        } catch (e) {
            dispatch(error(e));
        }
    }, [path, verb, params, requestInstance]);

    return [state, fetch];
};

export default useRequest;

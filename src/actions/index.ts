import { IProduct } from '../types';

export const FETCH_RESULTS = 'FETCH_RESULTS';
export const FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS';

export function fetchResults() {
    return {
        type: FETCH_RESULTS,
    };
};

export function fetchResultsSuccess(results: IProduct[]) {
    return {
        type: FETCH_RESULTS_SUCCESS,
        payload: results,
    };
};
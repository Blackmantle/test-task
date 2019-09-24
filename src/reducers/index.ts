import { combineReducers } from 'redux';
import { FETCH_RESULTS_SUCCESS } from '../actions';
import { IProduct, IResults } from '../types';

const initialResultsState = {
    isLoading: true,
    data: [],
};

function results(state:IResults = initialResultsState, action: { type: string, payload: IProduct[] }) {
    switch (action.type) {
        case FETCH_RESULTS_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
            };
        default:
            return state;
    }
}

export default combineReducers({
    results,
});
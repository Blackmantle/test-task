import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import { fakeFetch } from '../utils';

function* fetchResults() {
    try {
        const data = yield call(fakeFetch, 1000);
        yield put(actions.fetchResultsSuccess(data));
    } catch(e) {}
}

function* watchFetchResults() {
    yield takeEvery(actions.FETCH_RESULTS, fetchResults);
}

export default function* rootSaga() {
    yield all([
        fork(watchFetchResults),
    ]);
}
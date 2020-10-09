import { all } from 'redux-saga/effects';

import todoSaga from '../../components/ToDo/saga';

export default function* rootSaga() {
    yield all([
        todoSaga(),
    ]);
}
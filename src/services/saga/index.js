import { all } from 'redux-saga/effects';

import todoSaga from '../../components/ToDo/saga';
import editSaga from '../../components/EditComponent/saga';

export default function* rootSaga() {
    yield all([
        todoSaga(),
        editSaga(),
    ]);
}
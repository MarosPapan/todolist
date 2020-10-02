import { takeLatest, call, put, select } from 'redux-saga/effects';
import _ from 'lodash';

import {INIT_EDITING} from './constants';

import {
    initEditingAction,
    startEditingAction,
    successEditingAction,
    invalidEditingAction
} from './actions';

import { taskLoadsInitAction } from '../ToDo/actions';

import { editTask } from './api';

function* taskEditSaga(action){
    let payload = null; 
    const formData = yield select(state => {
        return _.get(state, 'form.edit.values', null)
    })
    console.log("FORMDATA EDIT SAGA: ", formData);
    const id =_.get(action, 'id');

    try{
        startEditingAction()
        payload = yield call(editTask, id, formData)
    }catch(error){
        console.log(error);
        invalidEditingAction(error);
    }

    yield put(successEditingAction(payload));
    yield put(taskLoadsInitAction());
}

export default function* editSaga(){
    yield takeLatest(INIT_EDITING, taskEditSaga);
}
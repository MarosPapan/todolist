import { takeLatest, call, put } from 'redux-saga/effects';
import _ from 'lodash';

import { 
    getTasks,
    postItem,
    getTask,
    deleteTask,
} from './api';
import { 
    INIT_TASKS_LOAD,
    INIT_ADD_TODO,
    INIT_EDITING,
    INIT_GET_TASK,
    INIT_DELETE_TASK,
} from './constants';

import { 
    taskLoadsStartAction,
    taskLoadsSuccessAction,
    taskLoadsErrorAction,
    taskLoadsInitAction,

    addtodoStartAction,
    addtodoInitAction,
    addtodoSuccessAction,
    addtodoErrorAction,

    initGetTaskAction,
    getTaskSuccessAction,

    initEditingAction,
    startEditingAction,
    successEditingAction, 
    invalidEditingAction,

    startDeleteTaskAction,
    successDeleteTaskAction,
    errorDeleteTaskAction,
 } from "./actions";

 function* tasksSaga(action){
    yield put(taskLoadsStartAction());
    let payload = null;

    try{
        payload = yield call(getTasks);
        console.log(payload);
    }
    catch(error){
        console.log(error); 
        yield put(taskLoadsErrorAction(error));
        return null;
    }

    yield put(taskLoadsSuccessAction(payload));
    return null;
 }


function* addItemSaga(action){

    const formData = _.get(action, 'formData', null);
    let payload = null; 

    try{
        payload = yield call(postItem, formData);
    }
    catch(error){
        console.log('Error in addItemSaga', error);
        yield put(addtodoErrorAction(error));
        return null;
    }

    yield put(addtodoSuccessAction(payload))
    yield put(taskLoadsInitAction());
}

function* getTaskSaga(action){

    let payload = null;
    const id = _.get(action, 'id');

    try{
        payload = yield call(getTask, id);
        console.log('SAGA PAYLOAD OF DETAIL: ', payload);
    }catch(error){
        console.log('Error in saga -> ', error); 
        return null;
    }
    yield put(getTaskSuccessAction(payload));
    return null;
}

function* deleteTasksaga(action){

    let payload = null;
    const id = _.get(action, 'id');

    try{
        payload = yield call(deleteTask, id);
        console.log('DELETED ITEM: ', payload);
    }
    catch(error){
        console.log('DELETE TASK ERROR: ', error)
        yield put(errorDeleteTaskAction(error))
        return null
    }

    yield put(successDeleteTaskAction());
    yield put(taskLoadsInitAction());
}

 export default function* todoSaga() {
     yield takeLatest(INIT_DELETE_TASK, deleteTasksaga);
     yield takeLatest(INIT_GET_TASK, getTaskSaga);
     yield takeLatest(INIT_TASKS_LOAD, tasksSaga);
     yield takeLatest(INIT_ADD_TODO, addItemSaga);
 };

import { takeLatest, call, put, select } from 'redux-saga/effects';
import _ from 'lodash';

import { 
    getTasks,
    postItem,
    getTask,
    deleteTask,
    editTask,
    completeTask,
} from './api';

import { 
    INIT_TASKS_LOAD,
    TaskLoadTypes,
    Data,
    TaskState,

    INIT_ADD_TODO,
    INIT_EDITING,
    INIT_GET_TASK,
    INIT_DELETE_TASK,
    INIT_COMPLETE_TASK,
} from './constants';

import { 
    taskLoadsStartAction,
    taskLoadsSuccessAction,
    taskLoadsErrorAction,
    taskLoadsInitAction,

    addtodoSuccessAction,
    addtodoErrorAction,

    getTaskSuccessAction,

    successEditingAction, 
    invalidEditingAction,

    successDeleteTaskAction,
    errorDeleteTaskAction,
    completeTaskSuccessAction
 } from "./actions";

 function* tasksSaga(action: TaskLoadTypes){
    yield put(taskLoadsStartAction());
    let payload: TaskState;

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
    //yield put(taskLoadsInitAction());
}

function* getTaskSaga(action){

    let payload = null;
    const id = _.get(action, 'id');

    try{
        payload = yield call(getTask, id);
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
    }
    catch(error){
        console.log('DELETE TASK ERROR: ', error)
        yield put(errorDeleteTaskAction(error))
        return null
    }

    yield put(successDeleteTaskAction());
    yield put(taskLoadsInitAction());
}

function* taskEditSaga(action){
    let payload = null; 
    const formData = yield select(state => {
        return _.get(state, 'form.edit.values', null);
    })
    const id = yield select(state => {
        return _.get(state, 'getTask.id', null);
    })
    console.log("Saga is working", id);
    try{
        payload = yield call(editTask, id, formData)
        console.log("Updated item: ", payload);
    }catch(error){
        console.log(error);
        invalidEditingAction(error);
    }

    yield put(successEditingAction(payload));
    yield put(taskLoadsInitAction());
}

function* completeTaskSaga(action){
    let payload = null;
    const formData = _.get(action, 'formData', {});
    console.log("Form Data completeTask: ", formData);
    const id = _.get(action, 'id', null);
    console.log("ID Data completeTask: ", id);

    try{
        payload = yield call(completeTask, id, formData);
    }
    catch(error){
        console.log("COMPLETE TASK ERROR: ", error);
    }
    yield put(completeTaskSuccessAction(payload));
    console.log("Payload complete action: ", payload);
    return null;
}

 export default function* todoSaga() {
    yield takeLatest(INIT_COMPLETE_TASK, completeTaskSaga);
    yield takeLatest(INIT_EDITING, taskEditSaga);
    yield takeLatest(INIT_DELETE_TASK, deleteTasksaga);
    yield takeLatest(INIT_GET_TASK, getTaskSaga);
    yield takeLatest(INIT_TASKS_LOAD, tasksSaga);
    yield takeLatest(INIT_ADD_TODO, addItemSaga);
 };


 
import _ from 'lodash';

import {
    INIT_TASKS_START_LOAD,
    INIT_TASKS_SUCCESS_LOAD,
    INIT_TASKS_ERROR_LOAD,
    InitialTaskState
} from './constants';

export default (taskState = InitialTaskState, action = {} ) => {
    if (action.type === INIT_TASKS_START_LOAD){
        return {
            loading: true,
            loaded: false, 
            data: [],
            error: null,

        }
    }
    
    if (action.type === INIT_TASKS_SUCCESS_LOAD){
        return {
            loading: false,
            loaded: true, 
            data: _.get(action, 'payload', []),
            error: null,

        }
    }
    
    if (action.type === INIT_TASKS_ERROR_LOAD){
        return {
            loading: false,
            loaded: false, 
            data: [],
            error: _.get(action, 'error', null),

        }
    }
    
    return taskState;
}
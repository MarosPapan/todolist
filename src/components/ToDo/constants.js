export const INIT_TASKS_LOAD = 'INIT_TASKS_LOAD';
export const INIT_TASKS_START_LOAD = 'INIT_TASKS_START_LOAD';
export const INIT_TASKS_SUCCESS_LOAD = 'INIT_TASKS_SUCCESS_LOAD';
export const INIT_TASKS_ERROR_LOAD = 'INIT_TASKS_ERROR_LOAD';

export const InitialTaskState = {
    loading: false,
    loaded: false,
    error: null, 
    data: null,
}


export const ON_CHANGE = 'ON_CHANGE';

export const InitialFormState = {
    data: null,
}


export const INIT_ADD_TODO = 'INIT_ADD_TODO'; 
export const INIT_START_ADD_TODO = 'INIT_START_ADD_TODO'; 
export const INIT_SUCCESS_ADD_TODO = 'INIT_SUCCUESS_ADD_TODO'; 
export const INIT_ERROR_ADD_TODO = 'INIT_ERROR_ADD_TODO';

export const InitialAddToDoState = {
    posting: false, 
    posted: false, 
    data: {},
    error: null,
}

export const INIT_GET_TASK = "INIT_GET_TASK";
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS";
export const InitialGetTaskState = {
    editing: false,
    id: null,
    data: {},
}

export const INIT_DELETE_TASK = "INIT_DELETE_TASK";
export const DELETE_TASK_START = "DELETE_TASK_START";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_ERROR = "DELETE_TASK_ERROR";
export const initialDeleteState = {
    deleting: false, 
    deleted: false, 
    id: null,
    error: null,
}


export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL"; 
export const initModalState = {
    open: false,
}

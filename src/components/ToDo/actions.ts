import {
    INIT_TASKS_LOAD,
    INIT_TASKS_START_LOAD,
    INIT_TASKS_SUCCESS_LOAD,
    INIT_TASKS_ERROR_LOAD,
    TaskLoadTypes,
    TaskState, 

    ON_CHANGE,
    FormActionTypes,
    FormState,

    INIT_START_ADD_TODO, 
    INIT_SUCCESS_ADD_TODO,
    INIT_ERROR_ADD_TODO, 
    INIT_ADD_TODO,
    
    INIT_GET_TASK,
    GET_TASK_SUCCESS,

    DELETE_TASK_START,
    DELETE_TASK_SUCCESS, 
    DELETE_TASK_ERROR,
    INIT_DELETE_TASK,

    OPEN_MODAL, 
    CLOSE_MODAL,

    INIT_EDITING,
    SUCCESS_EDITING,
    INVALID_EDITING,

    INIT_COMPLETE_TASK,
    COMPLETE_TASK_SUCCESS,


} from './constants';


//GET TASKS ACTION
export const taskLoadsInitAction = (): TaskLoadTypes => {
    return {type: INIT_TASKS_LOAD}
};

export const taskLoadsStartAction = (): TaskLoadTypes => {
    return {type: INIT_TASKS_START_LOAD};
};

export const taskLoadsSuccessAction = (payload: TaskState): TaskLoadTypes => {
    return {type: INIT_TASKS_SUCCESS_LOAD, payload};
};

export const taskLoadsErrorAction = (error: string | null): TaskLoadTypes => {
    return {type: INIT_TASKS_ERROR_LOAD, error};
};

export const formOnChangeAction = (data: FormState): FormActionTypes => {
    return {type: ON_CHANGE, data}
};


//ADD TASK TO TODOLIST ACTIONS
export const addtodoStartAction = () => {
    return {type: INIT_START_ADD_TODO}
};

export const addtodoSuccessAction = (payload) => {
    return {type: INIT_SUCCESS_ADD_TODO, payload}
};

export const addtodoErrorAction = (error) => {
    return {type: INIT_ERROR_ADD_TODO, error}
};

export const addtodoInitAction = (formData) => {
    return {type: INIT_ADD_TODO, formData}
};

//GET TASK ACTIONS
export const initGetTaskAction = (id) => {
    return {type: INIT_GET_TASK, id}
};

export const getTaskSuccessAction = (payload) => {
    return {type: GET_TASK_SUCCESS, payload}
};

//DELETE TASK ACTION

export const initDeleteTaskAction = (id) => {
    return {type: INIT_DELETE_TASK, id}
};

export const startDeleteTaskAction = () => {
    return {type: DELETE_TASK_START}
};

export const successDeleteTaskAction = () => {
    return {type: DELETE_TASK_SUCCESS}
};

export const errorDeleteTaskAction = (error) => {
    return {type: DELETE_TASK_ERROR, error}
}

//MODAL ACTION

export const openModalAction = () => {
    return {type: OPEN_MODAL};
};

export const closeModalAction = () => {
    return {type: CLOSE_MODAL};
}


//EDIT ACTIONS

export const initEditingAction = (id) => {
    return {type: INIT_EDITING, id}
}; 

export const successEditingAction = (payload) => {
    return {type: SUCCESS_EDITING, payload}
};

export const invalidEditingAction = (error) => {
    return {type: INVALID_EDITING, error}
};

//Complete Task Actions

export const initCompleteTaskAction = (id, formData) => {
    return {type: INIT_COMPLETE_TASK, id, formData}
};

export const completeTaskSuccessAction = (payload) => {
    return {type: COMPLETE_TASK_SUCCESS, payload}
};
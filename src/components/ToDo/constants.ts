//load tasks constants
export const INIT_TASKS_LOAD = 'INIT_TASKS_LOAD';
export const INIT_TASKS_START_LOAD = 'INIT_TASKS_START_LOAD';
export const INIT_TASKS_SUCCESS_LOAD = 'INIT_TASKS_SUCCESS_LOAD';
export const INIT_TASKS_ERROR_LOAD = 'INIT_TASKS_ERROR_LOAD';

export const InitialTaskState = {
    loading: false,
    loaded: false,
    error: null, 
    data: [],
}

export interface Data{
    id: number;
    title: string;
    completed: boolean
}

export interface TaskState {
    loading: boolean;
    loaded: boolean;
    error: null | string;
    data: Data | never[];
}

interface TaskLoadInitAction {
    type: typeof INIT_TASKS_LOAD;
}

interface TaskLoadStartAction {
    type: typeof INIT_TASKS_START_LOAD;
}

interface TaskLoadSuccessAction {
    type: typeof INIT_TASKS_SUCCESS_LOAD;
    payload: TaskState;
}

interface TaskLoadErrorAction {
    type: typeof INIT_TASKS_ERROR_LOAD;
    error: null | string
}

export type TaskLoadTypes = TaskLoadInitAction | TaskLoadStartAction | TaskLoadSuccessAction | TaskLoadErrorAction;

//onchamge in form constants
export const ON_CHANGE = 'ON_CHANGE';

export const InitialFormState = {
    data: null,
};

export interface FormState {
    data: string | null;
};

interface FormOnChangeAction {
    type: typeof ON_CHANGE;
    data: FormState;
};

export type FormActionTypes = FormOnChangeAction;

//add task to todo constants
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


//get task constants
export const INIT_GET_TASK = "INIT_GET_TASK";
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS";
export const InitialGetTaskState = {
    editing: false,
    id: null,
    data: {},
}

//delete constants
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



//modal constants
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL"; 
export const initModalState = {
    open: false,
}

//edit constants
export const INIT_EDITING = "INIT_EDITING";
export const SUCCESS_EDITING = "SUCCESS_EDITING"; 
export const INVALID_EDITING = "INVALID_EDITING";

export const InitialEditingState = {
    editing: true,
}

//Complete task constants
export const INIT_COMPLETE_TASK = "INIT_COMPLETE_TASK";
export const COMPLETE_TASK_SUCCESS = "COMPLETE_TASK_SUCCESS";
export const InitialCompleteTaskState = {
    complete: false,
    id: null,
    data: {},
}
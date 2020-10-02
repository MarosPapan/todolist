import {
    INIT_EDITING,
    START_EDITING,
    SUCCESS_EDITING,
    INVALID_EDITING,
} from './constants';

export const initEditingAction = (id) => {
    return {type: INIT_EDITING, id}
}; 

export const startEditingAction = () => {
    return {type: START_EDITING}
}; 

export const successEditingAction = (payload) => {
    return {type: SUCCESS_EDITING, payload}
};

export const invalidEditingAction = (error) => {
    return {type: INVALID_EDITING, error}
};

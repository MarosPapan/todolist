import _ from 'lodash'; 

import { 
    INIT_EDITING,
    START_EDITING,
    SUCCESS_EDITING,
    INVALID_EDITING,
    InitialEditingState,
 } from './constants';

export default (editState = InitialEditingState, action = {}) => {
    const type = _.get(action, 'type', null);

    if(type === START_EDITING) {
        return {
            editing: true,
            posting: true,
            posted: false, 
            error: null,
        }
    }

    if (type === SUCCESS_EDITING) {
        return {
            editing: false, 
            posting: false,
            posted: true, 
            error: null,
        }
    }

    if (type === INVALID_EDITING) {
        return {
            editing: false, 
            posting: false,
            posted: false, 
            error: _.get(action, 'error', null),
        }
    }

    return editState;
}
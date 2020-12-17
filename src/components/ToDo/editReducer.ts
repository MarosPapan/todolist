import _ from 'lodash'; 

import { 
    INIT_EDITING,
    SUCCESS_EDITING,
    INVALID_EDITING,
    InitialEditingState,
 } from './constants';

export default (editState = InitialEditingState, action = {}) => {
    const type = _.get(action, 'type', null);

    if(type === INIT_EDITING){
        return {
            editing: true,
            posting: true,
            posted: false,
            id: _.get(action, 'id', null), 
            error: null,
        }
    }


    if (type === SUCCESS_EDITING) {
        return {
            ...editState,
            editing: false, 
            posting: false,
            posted: true, 
            error: null,
        }
    }

    if (type === INVALID_EDITING) {
        return {
            ...editState,
            editing: false, 
            posting: false,
            posted: false, 
            error: _.get(action, 'error', null),
        }
    }

    return editState;
}
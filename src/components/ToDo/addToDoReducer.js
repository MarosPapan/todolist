import _ from 'lodash';

import {
    InitialAddToDoState,
    INIT_START_ADD_TODO,
    INIT_SUCCESS_ADD_TODO,
    INIT_ERROR_ADD_TODO
} from './constants';

export default (addToDoState = InitialAddToDoState, action = {}) => {
    const type = _.get(action, 'type', null); 
    if (type === INIT_START_ADD_TODO){
        return {
            posting: true,
            posted: false, 
            data: [],
            error: null,
        }
    }

    if (type === INIT_SUCCESS_ADD_TODO){
        return {
            posting: false,
            posted: true, 
            data: _.get(action, 'payload', {}),
            error: null,
        }
    }

    if (type === INIT_ERROR_ADD_TODO){
        return {
            posting: false,
            posted: false, 
            data: [],
            error: _.get(action, 'error', null),
        }
    }
    return addToDoState;
}

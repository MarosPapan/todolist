import _ from 'lodash';

import {
    DELETE_TASK_START,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_ERROR,
    initialDeleteState
} from './constants';

export default (deleteState = initialDeleteState, action={}) => {
    const type = _.get(action, 'type', null);
    
    if (type === DELETE_TASK_START){
        return {
            deleting: true, 
            deleted: false,
            data: _.get(action, 'payload', {}), 
            error: null
        }
    }

    if (type === DELETE_TASK_SUCCESS){
        return{
            deleting: false,
            deleted: true,
            data: [],
            error: null
        }
    }

    if (type === DELETE_TASK_ERROR){
        return{
            deleting: false, 
            deleted: false,
            data: [], 
            error: _.get(action, 'error'),
        }
    }
    return deleteState;
};